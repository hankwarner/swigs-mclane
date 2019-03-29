const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create Schema
const SongSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    album: {
        type: String
    },
    link: {
        type: String
    },
    year: {
        type: Number
    },
    month: {
        type: String
    }
});

module.exports = Song = mongoose.model('song', SongSchema);
