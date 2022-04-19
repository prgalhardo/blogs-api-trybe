const express = require('express');

const Router = express.Router();
const { userCreate, getAllUsers } = require('../controllers/userController');
const { equalEmailValidate, userValidate } = require('../middlewares/userMiddlewares');
const auth = require('../middlewares/auth/validateJWT');

Router.get('/', auth, getAllUsers);
Router.get('/:id');
Router.post('/', userValidate, equalEmailValidate, userCreate);

module.exports = Router;