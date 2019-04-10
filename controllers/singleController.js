// Single model
const Single = require('../models/Single');

module.exports = {
    getAllSingles(req, res) {
        Single.find()
            .sort({ year: -1 })
            .then(singles => res.json(singles));
    },
    
    addSingle(req, res) {
        const newSingle = new Single({
            artist: req.body.artist,
            title: req.body.title,
            album: req.body.album,
            soundcloudUrl: req.body.soundcloudUrl,
            albumCoverUrl: req.body.albumCoverUrl,
            year: req.body.year,
            month: req.body.month
        })
    
        newSingle.save().then(single => res.json(single));
    },

    deleteSingle(req, res) {
        Single.find()
        Song.findById(req.params.id)
            .then(single => single.remove().then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }));
    }
}
