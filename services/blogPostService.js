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

const findById = async (id) => {
  const post = await BlogPost.findOne({ 
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
    where: { id }, 
});
  return post;
};

module.exports = {
  postCreate,
  getAllPosts,
  findById,
};