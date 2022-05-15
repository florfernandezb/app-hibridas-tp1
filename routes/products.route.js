import express from "express";
import productsApiController from '../controllers/products/products.api.controller.js';
import categoriesApiController from '../controllers/categories/categories.api.controller.js';
import productsController from '../controllers/products/products.controller.js';

const route = express.Router();

route.get('/', productsController.showAllProducts);
route.get('/products/:id', productsController.showProductById);


route.get('/api/products', productsApiController.find);
route.get('/api/products/:id', productsApiController.findById);
route.delete('/api/products/:id', productsApiController.deleteOne);
route.get('/api/products/comments/:id', productsApiController.findComments);

route.get('/api/categories', categoriesApiController.find);
route.post('/api/categories/new', categoriesApiController.createCategory);
route.patch('/api/categories/:id', categoriesApiController.updateCategory);

export default route;
