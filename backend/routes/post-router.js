const express = require('express');
const fs = require('fs');
const multer = require('multer');
const PostCtrl = require('../controllers/post-ctrl');

const router = express.Router();

const storage  = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/')
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, Date.now() + '-' + fileName);
  }
});
const upload = multer({ storage: storage });

router.post('/post', upload.single('image'), PostCtrl.createPost)
router.put('/post/:id', PostCtrl.updatePost)
router.delete('/post/:id', PostCtrl.deletePost)
router.get('/post/:username', PostCtrl.getPostsByUser)
router.get('/posts', PostCtrl.getPosts)

module.exports = router