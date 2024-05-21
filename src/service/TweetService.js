const { TweetRepository, HashtagRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags
    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTags = await this.hashtagRepository.findbyName(tags);
    let title = alreadyPresentTags.map((tags) => tags.title);
    console.log("alreadyPresentTags", title);
    let newTags = tags.filter((tag) => !title.includes(tag));
    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });
    console.log("newtags", newTags);
    await this.hashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }

  async get(tweetId) {
    try {
      const tweet = await this.tweetRepository.getWithComments(tweetId);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = TweetService;
