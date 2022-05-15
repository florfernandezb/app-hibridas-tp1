import * as ProductsModel from '../../services/products/products.service.js';

export function showAllProducts(req, res) {
    ProductsModel.find()
        .then(function (products) {
            res.render('home', { products })
        })
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
