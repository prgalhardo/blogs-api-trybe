const express = require('express');

const Router = express.Router();
const { loginController } = require('../controllers/loginController');
const generateToken = require('../services/generateToken');
const { loginValidate, verifyEmail } = require('../middlewares/loginMiddlewares');

Router.post('/', loginValidate, verifyEmail, loginController, generateToken);

module.exports = Router;