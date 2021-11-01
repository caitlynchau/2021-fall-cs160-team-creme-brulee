//model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String},
        displayName: { type: String},
        email: { type: String},
    },
    { timestamps: true },
);

// const User = mongoose.model('users', UserSchema);

module.exports = mongoose.model('users', User);