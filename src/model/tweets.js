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
        ref: "like",
      },
    ],
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweets", tweetSchema);
module.exports = Tweet;
