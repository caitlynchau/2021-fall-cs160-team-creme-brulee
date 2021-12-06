const Post = require('../models/post-model.js');
const fs = require('fs');

//POST POST REQUEST
createPost = (req, res) => {
    const body = req.body;
    const url = req.protocol + '://' + req.get('host');

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a post.'
        });
    }

    const post = new Post({
        location : body.location,
        caption : body.caption,
        tags : body.tags,
        itinerary: body.itinerary,
        username: body.username,
        image: url + '/public/' + req.file.filename
    });
    
    if(!post) {
        return res.status(400).json({ success: false, error: err });
    }

    post.save().then((result) => {
        return res.status(201).json({
            success: true,
            data: result,
            id: post._id,
            message: 'Post created!',
        });
    })
    .catch(error => {
        return res.status(400).json({
            error, message: 'Post not created',
        });
    });
}

//POST PUT REQUEST
updatePost = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Post.findOne({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Post not found!',
            })
        }
        post.username = post.username
        post.password = post.password
        post.email = post.email
        post.save().then(() => {
                return res.status(200).json({
                    success: true,
                    id: post._id,
                    message: 'Post updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Post not updated!',
                })
            })
    })
}

//POST DELETE REQUEST
deletePost = async (req, res) => {
    await Post.findOneAndDelete({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!post) {
            return res
                .status(404)
                .json({ success: false, error: `Post not found` })
        }

        return res.status(200).json({ success: true, data: post })
    }).catch(err => console.log(err))
}

//POST GET REQUEST
getPostsByUser = async (req, res) => {
    await Post.find({ username: req.params.username }, (err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!posts) {
            return res
                .status(404)
                .json({ success: false, error: `Posts not found` })
        }
        return res.status(200).json({ success: true, data: posts })
    }).clone().catch(err => console.log(err))   
}

//POSTS GET REQUEST
getPosts = async (req, res) => {
    await Post.find({}, (err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Post not found` })
        }
        return res.status(200).json({ success: true, data: posts })
    }).clone().catch(err => console.log(err))
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPostsByUser,
    getPosts,
}