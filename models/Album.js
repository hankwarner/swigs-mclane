const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create Schema
const AlbumSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    songs: {
        type: Array,
        required: true
    },
    soundcloudUrl: {
        type: String
    },
    albumCoverUrl: {
        type: String
    },
    year: {
        type: Number
    },
    month: {
        type: String
    }
});

module.exports = Album = mongoose.model('album', AlbumSchema);
