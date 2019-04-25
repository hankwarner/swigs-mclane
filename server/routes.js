const express = require('express');
const router = express.Router();
const singleController = require('../controllers/singleController');
const albumController = require('../controllers/albumController');
const twitterController = require('../../controllers/twitterController');

// GET api/singles
router.get('/singles', singleController.getAllSingles);
// POST api/singles
router.post('/singles', singleController.addSingle);
// DELETE api/singles
router.delete('/singles/:id', singleController.deleteSingle);


// GET api/albums
router.get('/albums', albumController.getAllAlbums);
// POST api/albums
router.post('/albums', albumController.addAlbum);
// DELETE api/ablums
router.delete('/albums/:id', albumController.deleteAlbum);

// GET api/twitter
router.get('/twitter', twitterController.getTweetsByUser);

module.exports = router;
