const { Category } = require('../models');

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

const verifyCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  const compareIds = categoryIds.map((id) => Category.findOne({ where: id }));
  const result = await Promise.all(compareIds);
  const verifyAllCategorys = result.every((verifyCategory) => verifyCategory);
  if (!verifyAllCategorys) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

const blogPostValidate = async (req, res, next) => {
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

module.exports = {
  blogPostValidate,
  verifyCategoryId,
};