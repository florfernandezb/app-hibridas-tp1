import * as ProductsModel from '../../services/products/products.service.js';
import * as CategoriesModel from '../../services/categories/categories.service.js';

export async function showAllProducts(req, res) {
    
    const prod = await ProductsModel.find()
    const cat = await CategoriesModel.find()

    console.log(prod, cat)
    res.render('home', { products: prod, categories: cat })
}

export function showProductById(req, res) {
    const id = req.param.id
    ProductsModel.findById(id)
        .then(function (product) {
            res.render('product', { product })
        })
}

export function showProductsByCategory(req, res) {
    const category = req.param.category
    ProductsModel.findByCategory()
        .then(function (category) {

        })
}

export default {
    showAllProducts,
    showProductById,
    showProductsByCategory
}
