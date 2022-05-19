import express from "express";
import productsApiController from '../controllers/api/products/products.api.controller.js';
import categoriesApiController from '../controllers/api/categories/categories.api.controller.js';
import usersApiController from '../controllers/api/users/users.api.controller.js';
import commentsApiController from '../controllers/api/comments/comments.api.controller.js'

import homeController from '../controllers/view/home.controller.js';
import productController from '../controllers/view/product.controller.js';

const route = express.Router();

// HOME CONTROLLER
route.get('/', homeController.showAllProducts);
route.post('/categoryId', homeController.showProductsByCategory)

// PRODUCT CONTROLLER
route.get('/products/:id', productController.showProductById);

// comments CONTROLLER
// route.post('/:productId/new-comment', productController.createComment);
// route.post('/products/new-comment', productController.saveCommentProductId);
route.post('/new-comment', productController.createComment);

// API CONTROLLER

route.get('/api/products', productsApiController.find);
route.get('/api/products/:productId', productsApiController.findById);
route.delete('/api/products/:productId', productsApiController.deleteOne);
route.get('/api/products/:categoryName/:categoryId', productsApiController.findByCategory);

route.get('/api/categories', categoriesApiController.find);
route.post('/api/categories/new-category', categoriesApiController.createCategory);
route.patch('/api/categories/:categoryId', categoriesApiController.updateCategory);

route.get('/api/users', usersApiController.find);

route.get('/api/comments', commentsApiController.find);
route.get('/api/:productId/comments/', commentsApiController.findByProductId);
route.post('/api/:productId/new-comment/', commentsApiController.createComment);
route.patch('/api/comments/:commentId/', commentsApiController.updateComment);

export default route;
