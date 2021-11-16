const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Post = new Schema(
    {
        username: { type: String},
        datePosted: { type: Date},
        location: {type: String},
        caption: { type: String},
    },
    { timestamps: true },
);

module.exports = mongoose.model('posts', Post);