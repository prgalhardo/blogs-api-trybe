const express = require('express');

const Router = express.Router();
const { 
  postCreate, 
  getAllPosts, 
  findById, 
  updatePost,
  deletePost,
} = require('../controllers/blogPostController');
const auth = require('../middlewares/auth/validateJWT');
const { 
blogPostCreateValidate, 
verifyCategoryId,
findByIdValidate,
blogPostUpdateValidate,
verifyUserId,
} = require('../middlewares/blogPostMiddlewares');

Router.post('/', auth, blogPostCreateValidate, verifyCategoryId, postCreate);
Router.get('/', auth, getAllPosts);
Router.get('/:id', auth, findByIdValidate, findById);
Router.put('/:id', auth, blogPostUpdateValidate, verifyUserId, updatePost);
Router.delete('/:id', auth, findByIdValidate, verifyUserId, deletePost);

module.exports = Router;