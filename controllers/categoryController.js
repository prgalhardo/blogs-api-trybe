const Category = require('../services/categoryService');

const categoryCreate = async (req, res, _next) => {
  const { name } = req.body;
  try {
    const category = await Category.categoryCreate({ name });
    return res.status(201).json(category);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  categoryCreate,
};