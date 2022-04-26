const express = require('express');

const Router = express.Router();
const { postCreate, getAllPosts } = require('../controllers/blogPostController');
const auth = require('../middlewares/auth/validateJWT');
const { blogPostValidate, verifyCategoryId } = require('../middlewares/blogPostMiddlewares');

Router.post('/', auth, blogPostValidate, verifyCategoryId, postCreate);
Router.get('/', auth, getAllPosts);

module.exports = Router;