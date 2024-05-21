const TweetService = require("../service/TweetService");

const tweetService = new TweetService();

const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(200).json({
      success: true,
      message: "succesfully created a tweet ",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "not able to create a tweet ",
      data: {},
      err: error,
    });
  }
};

module.exports = { createTweet };
