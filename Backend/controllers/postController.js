const { Post } = require('../models/Index.js');
const { body, validationResult } = require('express-validator');

const validateCreatePost = [
  body('caption').notEmpty().withMessage('Caption is required'),
  body('image').notEmpty().withMessage('Image is required'),
];

const createPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { caption, image, hashtag } = req.body;
  const userId = req.user.id;
  try {
    console.log("Creating post with:", { caption, image, hashtag, userId });
    const newPost = await Post.create({ caption, image, hashtag, userId });
    console.log("Post created successfully:", newPost);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createPost, validateCreatePost };
