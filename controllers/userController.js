const { createUser } = require('../services/userService');

const userController = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  try {
    await createUser({ displayName, email, password });
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  userController,
};