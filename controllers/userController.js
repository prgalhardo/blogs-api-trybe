const { createUser } = require('../services/userService');
const token = require('../services/generateToken');

const userController = async (req, res, _next) => {
  const { displayName, email, password } = req.body;
  try {
    const user = await createUser({ displayName, email, password });
    return res.status(201).json({ token: token(user) });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  userController,
};