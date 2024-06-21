const CommentService = require("../service/CommentService");

const commentService = new CommentService();

const createComment = async (req, res) => {
  console.log(
    req.body.content,
    req.query.modelType,
    req.query.modelId,
    req.body.userId
  );
  try {
    const comment = await commentService.createComment(
      req.body.content,
      req.query.modelType,
      req.query.modelId,
      req.body.userId
    );
    return res.status(200).json({
      data: comment,
      success: true,
      message: "succesfully created a comment",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      data: {},
      success: false,
      message: "something went wrong while creating a comment",
      err: error,
    });
  }
};

module.exports = { createComment };
