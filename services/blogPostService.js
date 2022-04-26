const { BlogPost, User, Category } = require('../models');

const postCreate = async ({ userId, title, content, categoryIds }) => {
  const post = await BlogPost.create({ userId, title, content, categoryIds });
  return post;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({ 
    include: [
      {
         model: User, 
         as: 'user',
         attributes: { exclude: ['password'] },
       },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
  ],
  });
  return posts;
};

module.exports = {
  postCreate,
  getAllPosts,
};