const Tweets = require("../model/tweets");

class TweetRepository {

    async create(data) {
        try {
            const user = await Tweets.create(data);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {

        try {
            const user = await Tweets.findById(id)
        } catch (error) {
            console.log(error)
        }
    }

    async getWithComments() {
        try {
            
        } catch (error) {
            
        }
    }

    async getAll(offset, limit) {
        try {
            const response = await Tweets.find().skip(offset).limit(limit);
            return response;
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
    
module.exports = TweetRepository;
