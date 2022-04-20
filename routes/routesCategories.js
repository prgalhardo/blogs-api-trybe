const express = require('express');

const Router = express.Router();
const { categoryCreate, getAllCategories } = require('../controllers/categoryController');
const auth = require('../middlewares/auth/validateJWT');
const { categoryValidate } = require('../middlewares/categoryMiddlewares');

Router.post('/', auth, categoryValidate, categoryCreate);
Router.get('/', auth, getAllCategories);

module.exports = Router;