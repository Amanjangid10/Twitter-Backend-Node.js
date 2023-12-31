const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    }
}, { timestamps: true });

const Comments= mongoose.model('Comments', commentSchema)
module.exports = Comments;