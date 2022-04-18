const express = require('express');

const Router = express.Router();
const User = require('../controllers/userController');
const generateToken = require('../middlewares/generateToken');
const { equalEmailValidate, userValidate } = require('../middlewares/userMiddlewares');

Router.post('/', userValidate, equalEmailValidate, User.userController, generateToken);

module.exports = Router;