const { Category, BlogPost } = require('../models');

const error = (status, message) => ({ status, message });

const titleValidation = (title) => {
  if (!title) throw error(400, '"title" is required');
};

const contentValidation = (content) => {
  if (!content) throw error(400, '"content" is required');
};

const categoryIdsValidation = (categoryIds) => {
  if (!categoryIds) throw error(400, '"categoryIds" is required');
};

const categoryIdsUpdateValidation = (categoryIds) => {
  if (categoryIds) throw error(400, 'Categories cannot be edited');
};

const verifyCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  const compareIds = categoryIds.map((id) => Category.findOne({ where: id }));
  const result = await Promise.all(compareIds);
  const verifyAllCategorys = result.every((verifyCategory) => verifyCategory);
  if (!verifyAllCategorys) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

const blogPostCreateValidate = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  try {
    titleValidation(title);
    contentValidation(content);
    categoryIdsValidation(categoryIds);
    next();
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

const findByIdValidate = async (req, res, next) => {
  const { id } = req.params;
  const post = await BlogPost.findByPk(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  next();
};

const blogPostUpdateValidate = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  try {
    titleValidation(title);
    contentValidation(content);
    categoryIdsUpdateValidation(categoryIds);
    next();
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

const verifyUserId = async (req, res, next) => {
  const { userId } = req.user;
  const { id } = req.params;
  const post = await BlogPost.findOne({ where: { id } });
  if (post.userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

module.exports = {
  blogPostCreateValidate,
  verifyCategoryId,
  findByIdValidate,
  blogPostUpdateValidate,
  verifyUserId,
};