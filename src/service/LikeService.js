const {
  TweetRepository,
  UserRepository,
  LikeRepository,
} = require("../repository");

class LikeService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.userRepository = new UserRepository();
    this.likeRepository = new LikeRepository();
  }

  async toggleLike(ModelType, ModelId, UserId) {
    console.log("type", ModelType, "Modelid", ModelId, "userid", UserId);

    if (ModelType == "Tweet") {
      var likable = await this.tweetRepository.get(ModelId);
      console.log("likable", likable);
    } else if (ModelType == "Comment") {
      //ToDo
    } else {
      throw new Error("something went wrong");
    }

    console.log("beyond");

    const exists = await this.likeRepository.findUserAndLikable({
      onModel: ModelType,
      likable: ModelId,
      user: UserId,
    });
    console.log("exists", exists);

    if (exists) {
      likable.like.pull(exists.id);
      await likable.save();
      await this.likeRepository.destroy(exists.id);
      console.log("inside exists");
      var isAdded = false;
    } else {
      const newlike = await this.likeRepository.create({
        onModel: ModelType,
        likable: ModelId,
        user: UserId,
      });
      console.log("inside new like creation");
      console.log(newlike);
      likable.like.push(newlike);
      await likable.save();

      var isAdded = true;
    }
    return isAdded;
  }
}

module.exports = LikeService;
