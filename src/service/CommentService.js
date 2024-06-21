const CommentRepository = require("../repository/commentRepository");
const TweetRepository = require("../repository/tweetRepository");

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }

  async createComment(content, modelType, modelId, userId) {
    if (modelType == "Tweet") {
      var commentable = await this.tweetRepository.get(modelId);
    } else if (modelType == "Comment") {
      var commentable = await this.commentRepository.get(modelId);
    } else {
      throw new Error("something wrong while creating comment");
    }

    const newComment = await this.commentRepository.create({
      content: content,
      onModel: modelType,
      commentable: modelId,
      user: userId,
      comment: [],
    });
    console.log(newComment);

    commentable.comment.push(newComment);
    await commentable.save();

    return newComment;
  }
}

module.exports = CommentService;
