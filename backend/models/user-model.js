//model.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const User = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        email: { type: String, required: true, unique: true},
    },
    { timestamps: true }, 
);

User.plugin(uniqueValidator);

module.exports = mongoose.model('users', User);