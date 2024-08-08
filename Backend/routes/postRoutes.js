const express = require('express');
const router = express.Router();
const { createPost, validateCreatePost } = require('../controllers/postController.js');
const authorizeUser = require('../middlewares/authorizeUser.js');

router.post('/create', authorizeUser, validateCreatePost, createPost);

module.exports = router;
