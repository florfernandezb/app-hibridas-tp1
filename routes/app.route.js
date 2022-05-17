import express from "express";
import productsApiController from '../controllers/products/products.api.controller.js';
import categoriesApiController from '../controllers/categories/categories.api.controller.js';
import usersApiController from '../controllers/users/users.api.controller.js';
import commentsApiController from '../controllers/comments/comments.api.controller.js'

import productsController from '../controllers/products/products.controller.js';
import categoriesController from '../controllers/categories/categories.controller.js';

const route = express.Router();

// VIEW CONTROLLER

route.get('/', productsController.showAllProducts);
route.get('/products/:id', productsController.showProductById);

route.get('/categoriesSelect', categoriesController.showAllCategories);


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
