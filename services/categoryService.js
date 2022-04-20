const { Category } = require('../models');

const categoryCreate = async ({ name }) => {
  const category = await Category.create({ name });
  return category;
};

module.exports = {
  categoryCreate,
};