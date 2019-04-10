const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create Schema
const SingleSchema = new Schema({
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

module.exports = Single = mongoose.model('single', SingleSchema);
