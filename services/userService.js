const { User } = require('../models');

const userCreate = async ({ displayName, email, password }) => {
  const user = await User.create({ displayName, email, password });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const findById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const deleteUser = async ({ userId: id }) => {
  const delUser = await User.destroy({ where: { id } });
  return delUser;
};

module.exports = {
  userCreate,
  getAllUsers,
  findById,
  deleteUser,
};