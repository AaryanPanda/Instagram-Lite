const { Post, User, Like, Comment } = require('../models/Index');
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
    const newPost = await Post.create({ caption, image, hashtag, userId });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          as: 'postedBy',
          attributes: ['username'],
        },
        {
          model: Like,
          as: "likes",
          attributes: ["userId"]
        }
      ],
      order: [['createdAt', 'DESC']],
    });
    const formattedPosts = posts.map((post) => ({
      id: post.id,
      profileImg: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
      username: post.postedBy.username,
      time: post.createdAt,
      postImg: post.image,
      likeCount: post.likes.length,
      commentCount: 20,
      likedByUserIds: post.likes.map(like => like.userId),
      caption: post.caption
      
    }));
    res.status(200).json(formattedPosts);
  } catch (error) {
    console.log('Error fetching posts :' + error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const likePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const userId = req.user.id;

    //Find the post
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const existingLike = await Like.findOne({ where: { postId, userId } });

    if (existingLike) {
      return res
        .status(400)
        .json({ message: 'User has already liked the post' });
    }

    await Like.create({ postId, userId });

    res.status(200).json({ message: 'Post liked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const unlikePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const userId = req.user.id;

    //Find the post
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const existingLike = await Like.findOne({ where: { postId, userId } });

    if (!existingLike) {
      return res.status(400).json({ message: 'User has not liked the post' });
    }

    await existingLike.destroy();

    res.status(200).json({ message: 'Post unliked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const addComment = async (req, res) => {
  try {
    const { comment, postId } = req.body;
    const userId = req.user.id;

    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    console.log(comment, postId, userId);
    const newComment = await Comment.create({
      comment,
      postId,
      userId,
    });
    console.log(newComment);

    const commentWithUser = await Comment.findOne({
      where: { id: newComment.id },
      include: [
        {
          model: User,
          as: 'postedBy',
          attributes: ['username'],
        },
      ],
    });

    res.status(201).json(commentWithUser);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.findAll({
      where: { postId },
      include: [
        {
          model: User,
          as: 'postedBy',
          attributes: ['username', 'id'],
        },
      ],
    });

    res.status(200).json(comments);
  } catch (err) {}
};

module.exports = { createPost, validateCreatePost, getAllPost, likePost, unlikePost };