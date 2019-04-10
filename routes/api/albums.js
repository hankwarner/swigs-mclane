const express = require('express');
const router = express.Router();
const albumController = require('../../controllers/albumController');

// GET api/albums
router.get('/', albumController.getAllAlbums);
// POST api/albums
router.post('/', albumController.addAlbum);
// DELETE api/ablums
router.delete('/:id', albumController.deleteAlbum);

module.exports = router;
