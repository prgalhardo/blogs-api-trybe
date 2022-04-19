const express = require('express');

const Router = express.Router();
const { userCreate, getAllUsers } = require('../controllers/userController');
const generateToken = require('../services/generateToken');
const { equalEmailValidate, userValidate } = require('../middlewares/userMiddlewares');
const auth = require('../middlewares/auth/validateJWT');

Router.get('/', auth, getAllUsers);
Router.post('/', userValidate, equalEmailValidate, userCreate, generateToken);

module.exports = Router;