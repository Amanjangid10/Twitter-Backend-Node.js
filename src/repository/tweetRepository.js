const Tweet = require("../model/tweets");
const CrudRepository = require("./crudRepository");

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async create(data) {
    try {
      const user = await Tweet.create(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  async getTweet(id) {
    try {
      const response = await Tweet.findById(id);
      return response;
    } catch (error) {
      console.log("something went wrong in crud repo");
      throw error;
    }
  }

  async getWithComments() {
    try {
    } catch (error) {}
  }

  async getAll(offset, limit) {
    try {
      const response = await Tweet.find().skip(offset).limit(limit);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = TweetRepository;
