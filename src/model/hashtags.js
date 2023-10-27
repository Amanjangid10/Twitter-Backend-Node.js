const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweets'
        }
    ]
}, { timestamps: true });

const Hashtags = mongoose.model('hashtags', hashtagSchema);
module.exports = Hashtags;
