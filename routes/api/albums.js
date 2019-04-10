const express = require('express');
const router = express.Router();

// Album model
const Album = require('../../models/Albums')

//TODO functions move to controllers
// GET api/albums
router.get('/', (req, res) => {
    Album.find()
        .sort({ year: -1 })
        .then(albums => res.json(albums));
});

// POST api/albums
router.post('/', (req, res) => {
    const newAlbum = new Album({
        artist: req.body.artist,
        title: req.body.title,
        songs: req.body.songs,
        soundcloudUrl: req.body.soundcloudUrl,
        albumCoverUrl: req.body.albumCoverUrl,
        year: req.body.year,
        month: req.body.month
    })

    newAlbum.save().then(album => res.json(album));
});

router.delete('/:id', (req, res) => {
    Album.findById(req.params.id)
        .then(album => album.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;
