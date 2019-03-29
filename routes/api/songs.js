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
        link: req.body.link,
        year: req.body.year,
        month: req.body.month
    })

    newSong.save().then(song => res.json(song));
});

module.exports = router;
