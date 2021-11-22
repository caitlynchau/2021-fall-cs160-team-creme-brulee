//model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String, required: true},
        password: { type: String, required: true},
        email: { type: String, required: true},
    },
    { timestamps: true }, 
);

// const User = mongoose.model('users', UserSchema);

module.exports = mongoose.model('users', User);