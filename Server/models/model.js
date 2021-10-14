//model.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        displayName: { type: String, default: username },
        email: { type: String, required: true },
    },
    { timestamps: true },
);

const User = mongoose.model('users', UserSchema);

module.exports = User;