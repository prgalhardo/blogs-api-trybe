const express = require('express');

const Router = express.Router();
const { loginController } = require('../controllers/loginController');
const { loginValidate, verifyEmail } = require('../middlewares/loginMiddlewares');

Router.post('/', loginValidate, verifyEmail, loginController);

module.exports = Router;