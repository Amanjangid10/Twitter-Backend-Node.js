const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtags'
        }
    ]
    
}, {timestamps : true})

const Tweets = mongoose.model('tweets', tweetSchema);
module.exports = Tweets;
