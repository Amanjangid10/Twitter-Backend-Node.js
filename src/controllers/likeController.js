const LikeService = require("../service/LikeService");

const likeService = new LikeService();

const toggleLike = async (req, res) => {
  console.log(req.query);
  try {
    const response = await likeService.toggleLike(
      req.query.modelType,
      req.query.modelId,
      req.query.userId
    );
    return res.status(200).json({
      data: response,
      message: "clicked toggle like button",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      data: {},
      message: "Someting went wrong during toggling like",
      success: true,
      err: error,
    });
  }
};

module.exports = { toggleLike };
