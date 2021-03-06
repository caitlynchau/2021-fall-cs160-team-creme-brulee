const User = require('../models/user-model.js');

//USER POST REQUEST
createUser = (req, res) => {
    const body = req.body;
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user.'
        });
    }

    const user = new User({username: body.signUpUser, password: body.signUpPass, email: body.signUpEmail});

    if(!user) {
        return res.status(400).json({ success: false, error: err });
    }

    user.save().then(() => {
        return res.status(201).json({
            success: true,
            data: user,
            id: user._id,
            message: "User created!",
        });
    })
    .catch(error => {
        return res.status(400).json({
            error, message: 'User not created',
        });
    });
}


//USER PUT REQUEST
updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        user.username = body.username
        user.password = body.password
        user.email = body.email
        user.save().then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}

//USER DELETE REQUEST
deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

//USER GET REQUEST
getUserById = async (req, res) => {
    const tempPass = 'swatip';
    await User.findOne({ username: req.params.username }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).clone().catch(err => console.log(err))
}

//USER POST REQUEST - authentication
authenticateUser = async (req, res) => {
    const body = req.body;
    await User.findOne({ username: body.signInUser }, (err, user) => {
        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        else {
            if(body.signInPass !== user.password) {
                return res
                    .status(404)
                    .json({ success: false, error: `Incorrect password`, data: null })
            }
        }
        return res.status(201).json({
            success: true,
            data: user,
            id: user._id,
            message: "User authenticated!",
        });
    }).clone().catch(err => console.log(err));
}

//USERS GET REQUEST
getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).clone().catch(err => console.log(err))
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    authenticateUser,
    getUsers,
}