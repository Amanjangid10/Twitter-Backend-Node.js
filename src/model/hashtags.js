const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweets'
        }
    ]
}, { timestamps: true });

const Hashtags = mongoose.model('Hashtags', hashtagSchema);
module.exports = Hashtags;
