const express = require('express');

const Router = express.Router();
const { userCreate, getAllUsers, findById, deleteUser } = require('../controllers/userController');
const { 
  equalEmailValidate, 
  userValidate, 
  findByIdValidate } = require('../middlewares/userMiddlewares');
const auth = require('../middlewares/auth/validateJWT');

Router.get('/', auth, getAllUsers);
Router.get('/:id', auth, findByIdValidate, findById);
Router.post('/', userValidate, equalEmailValidate, userCreate);
Router.delete('/:me', auth, deleteUser);

module.exports = Router;