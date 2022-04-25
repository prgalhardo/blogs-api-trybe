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

module.exports = {
  postCreate,
};