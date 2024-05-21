const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      Max: [250, "tweets cannot be more than 250 characters"],
    },
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "likes",
      },
    ],
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
  },
  { timestamps: true }
);

const Tweets = mongoose.model("Tweets", tweetSchema);
module.exports = Tweets;
