const { BlogPost } = require('../models');

const postCreate = async ({ userId, title, content, categoryIds }) => {
  const post = await BlogPost.create({ userId, title, content, categoryIds });
  return post;
};

module.exports = {
  postCreate,
};