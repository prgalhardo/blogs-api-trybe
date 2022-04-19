const express = require('express');

const Router = express.Router();
const { userCreate, getAllUsers, findById } = require('../controllers/userController');
const { 
  equalEmailValidate, 
  userValidate, 
  findByIdValidate } = require('../middlewares/userMiddlewares');
const auth = require('../middlewares/auth/validateJWT');

Router.get('/', auth, getAllUsers);
Router.get('/:id', auth, findByIdValidate, findById);
Router.post('/', userValidate, equalEmailValidate, userCreate);

module.exports = Router;