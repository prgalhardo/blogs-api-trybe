const Post = require('../services/blogPostService');

const postCreate = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.user;
  try {
    const post = await Post.postCreate({ userId, title, content, categoryIds });
    return res.status(201).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAllPosts = async (req, res, _next) => {
  try {
    const posts = await Post.getAllPosts();
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const findById = async (req, res, _next) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updatePost = async (req, res, _next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  try {
    const post = await Post.updatePost({ id, title, content });
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deletePost = async (req, res, _next) => {
  const { id } = req.params;
  try {
    const delPost = await Post.deletePost({ id });
    return res.status(204).json(delPost);
  } catch (err) {
    console.log(err);
    return res.status(500).status(err);
  }
};

module.exports = {
  postCreate,
  getAllPosts,
  findById,
  updatePost,
  deletePost,
};