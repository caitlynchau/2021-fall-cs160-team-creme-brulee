const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Post = new Schema(
    {
        location: {type: String, required: true},
        caption: { type: String, required: true},
        tags: {type: String, required: true},
        img: {data: Buffer, contentType: String},
    },
    { timestamps: true },
);

module.exports = mongoose.model('posts', Post);