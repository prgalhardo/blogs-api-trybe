const { User } = require('../models');

const createUser = async ({ displayName, email, password }) => {
  const user = await User.create({ displayName, email, password });
  return user;
};

module.exports = {
  createUser,
};