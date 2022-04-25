const express = require('express');

const Router = express.Router();
const { postCreate } = require('../controllers/blogPostController');
const auth = require('../middlewares/auth/validateJWT');
const { blogPostValidate, verifyCategoryId } = require('../middlewares/blogPostMiddlewares');

Router.post('/', auth, blogPostValidate, verifyCategoryId, postCreate);

module.exports = Router;