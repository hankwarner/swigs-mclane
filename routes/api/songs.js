const express = require('express');
const router = express.Router();

// Song model
const Song = require('../../models/Song')

//TODO functions move to controllers
// GET api/songs
router.get('/', (req, res) => {
    Song.find()
        .sort({ year: -1 })
        .then(songs => res.json(songs));
});

// POST api/songs
router.post('/', (req, res) => {
    const newSong = new Song({
        artist: req.body.artist,
        title: req.body.title,
        album: req.body.album,
        soundcloudUrl: req.body.soundcloudUrl,
        albumCoverUrl: req.body.albumCoverUrl,
        year: req.body.year,
        month: req.body.month
    })

    newSong.save().then(song => res.json(song));
});

router.delete('/:id', (req, res) => {
    Song.findById(req.params.id)
        .then(song => song.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;
