const validator = require('validator');
const { User } = require('../models');

const error = (status, message) => ({ status, message });

const emailValidation = (email) => {
  if (email === undefined) throw error(400, '"email" is required');
  if (validator.isEmpty(email)) throw error(400, '"email" is not allowed to be empty');
};

const passwordValidation = (password) => {
  if (password === undefined) throw error(400, '"password" is required');
  if (validator.isEmpty(password)) throw error(400, '"password" is not allowed to be empty');
};

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  const allUsers = await User.findAll();
  const findByEmail = allUsers.find((userEmail) => userEmail.email === email);
  if (!findByEmail) return res.status(400).json({ message: 'Invalid fields' });
  next();
};

const loginValidate = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    emailValidation(email);
    passwordValidation(password);
    next();
  } catch (err) {
      return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  loginValidate,
  verifyEmail,
};
