const express = require('express');
const router = express.Router();

// Single controller
const singleController = require('../../controllers/singleController');

// GET api/singles
router.get('/', singleController.getAllSingles);
// POST api/singles
router.post('/', singleController.addSingle);
// DELETE api/singles
router.delete('/:id', singleController.deleteSingle);

module.exports = router;
