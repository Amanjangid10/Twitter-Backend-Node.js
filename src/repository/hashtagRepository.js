const Hashtags  = require("../model/hashtags");

class HashtagRepository{

    async create(data) {
        try {
            const tag = await Hashtags.create(data);
            return tag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtags.insertMany(data)
            return tags;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async get(id) {
        try {
            const response = await Hashtags.findById(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async destroy(id) {
        try {
            const response = await Hashtags.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    } 

    async findbyName(titleList) {
        try {
            const result = await Hashtags.find({
                title: titleList
            });
            console.log(result)
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;