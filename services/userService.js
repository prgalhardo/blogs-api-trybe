const { User } = require('../models');

const userCreate = async ({ displayName, email, password }) => {
  const user = await User.create({ displayName, email, password });
  return user;
};

const getAllUsers = async ({ id, displayName, email, image }) => {
  const users = await User.findAll({ id, displayName, email, image });
  return users;
};

module.exports = {
  userCreate,
  getAllUsers,
};