const Like = require("../model/like");
const CrudRepository = require("./crudRepository");

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findUserAndLikable(data) {
    console.log(data);
    try {
      const like = await Like.findOne(data);
      console.log(like);
      return like;
    } catch (error) {
      console.log("something wend wrong in like repository");
      throw error;
    }
  }
}

module.exports = LikeRepository;
