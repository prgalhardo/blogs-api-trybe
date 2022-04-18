const validator = require('validator');
const { User } = require('../models');

const error = (status, message) => ({ status, message });

const displayNameValidation = (displayName) => {
  if (displayName.length < 8) {
    throw error(400, '"displayName" length must be at least 8 characters long');
  }
};

const emailValidation = (email) => {
  if (!email) throw error(400, '"email" is required');
  if (!validator.isEmail(email)) {
    throw error(400, '"email" must be a valid email');
  }
};

const passwordValidation = (password) => {
  if (!password) throw error(400, '"password" is required');
  if (password.length !== 6) throw error(400, '"password" length must be 6 characters long');
};

const equalEmailValidate = async (req, res, next) => {
  const { email } = req.body;
  const allUsers = await User.findAll();
  const findByEmail = allUsers.find((userEmail) => userEmail.email === email);
  if (findByEmail) return res.status(409).json({ message: 'User already registered' });
  next();
};

const userValidate = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  try {
    displayNameValidation(displayName);
    emailValidation(email);
    passwordValidation(password);
    next();
  } catch (err) {
      return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  equalEmailValidate,
  userValidate,
};
