const express = require("express");
const { createTweet } = require("../../controllers/tweetController");
const { toggleLike } = require("../../controllers/likeController");
const router = express.Router();

router.post("/tweet", createTweet);
router.post("/like", toggleLike);

module.exports = router;
