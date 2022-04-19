const { User } = require('../models');

const login = async ({ email, password }) => {
  const userLogin = await User.findOne({ email, password });
  return userLogin;
};

module.exports = {
  login,
};
