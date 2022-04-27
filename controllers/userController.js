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
  try {
    const users = await User.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const findById = async (req, res, _next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteUser = async (req, res, _next) => {
  const { userId } = req.user;
  console.log(req.user);
  try {
    const delUser = await User.deleteUser({ userId });
    return res.status(204).json(delUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  userCreate,
  getAllUsers,
  findById,
  deleteUser,
};