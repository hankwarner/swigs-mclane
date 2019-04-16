const express = require('express');
const router = express.Router();

// Twitter controller
const twitterController = require('../../controllers/twitterController');

// GET api/twitter
router.get('/', twitterController.getTweetsByUser);

module.exports = router;
