const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  onModel: {
    type: String,
    required: true,
    enum: ["tweet", "comment"],
  },
  likable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
});

const Likes = mongoose.model("Likes", likeSchema);

module.exports = Likes;
