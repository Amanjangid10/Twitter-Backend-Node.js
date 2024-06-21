const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    commentable: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "Tweet",
    },
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comments", commentSchema);
module.exports = Comment;
