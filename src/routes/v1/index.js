const express = require('express');
const createTweet = require('../../controllers/tweetController');
const router = express.Router();


router.post('/tweet', createTweet);

module.exports = router;