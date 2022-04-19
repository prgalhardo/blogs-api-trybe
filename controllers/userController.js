const User = require('../services/userService');
const token = require('../services/generateToken');

const userCreate = async (req, res, _next) => {
  const { displayName, email, password } = req.body;
  try {
    const user = await User.userCreate({ displayName, email, password });
    return res.status(201).json({ token: token(user.id) });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAllUsers = async (req, res, _next) => {
  const { id, displayName, email, image } = req.body;
  try {
    const users = await User.getAllUsers({ id, displayName, email, image });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  userCreate,
  getAllUsers,
};