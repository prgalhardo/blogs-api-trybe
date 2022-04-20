const express = require('express');

const Router = express.Router();
const { categoryCreate } = require('../controllers/categoryController');
const auth = require('../middlewares/auth/validateJWT');
const { categoryValidate } = require('../middlewares/categoryMiddlewares');

Router.post('/', auth, categoryValidate, categoryCreate);

module.exports = Router;