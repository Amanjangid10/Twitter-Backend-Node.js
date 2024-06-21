const express = require("express");
const { createTweet } = require("../../controllers/tweetController");
const { toggleLike } = require("../../controllers/likeController");
const { createComment } = require("../../controllers/commentController");
const { signup, signIn } = require("../../controllers/userController");
const router = express.Router();

router.post("/tweet", createTweet);
router.post("/like", toggleLike);

router.post("/comment", createComment);

router.post("/signup", signup);
router.post("/signin", signIn);

module.exports = router;
