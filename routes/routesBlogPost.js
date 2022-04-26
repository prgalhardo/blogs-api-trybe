const express = require('express');

const Router = express.Router();
const { postCreate, getAllPosts, findById } = require('../controllers/blogPostController');
const auth = require('../middlewares/auth/validateJWT');
const { 
blogPostValidate, 
verifyCategoryId,
findByIdValidate,
} = require('../middlewares/blogPostMiddlewares');

Router.post('/', auth, blogPostValidate, verifyCategoryId, postCreate);
Router.get('/', auth, getAllPosts);
Router.get('/:id', auth, findByIdValidate, findById);

module.exports = Router;