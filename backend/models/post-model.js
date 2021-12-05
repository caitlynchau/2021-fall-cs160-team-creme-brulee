const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Post = new Schema(
    {
        location: {type: String, required: true},
        caption: { type: String, required: true},
        tags: {type: String, required: true},
        image: {type: String, required: true},
    },
    { timestamps: true },
);

module.exports = mongoose.model('posts', Post);