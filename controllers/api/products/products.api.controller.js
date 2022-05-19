import * as ProductsModel from '../../../services/products/products.service.js';

export function find(req, res) {
    ProductsModel.find()
        .then(function (products) {
            res.status(200).json(products);
        })
};

export function findById(req, res) {
    const id = req.params.productId
    ProductsModel.findById(id)
        .then(function (product) {
            res.status(200).json(product);
        })
};

export function findByCategory(req, res) {
    const category = req.params
    ProductsModel.findByCategory(category)
        .then(function (products) {
            res.status(200).json(products);
        })
}

export function deleteOne(req, res) {
    const id = req.params.productId
    ProductsModel.deleteOne(id)
        .then(function() {
            res.status(200).json();
        })
}

export default{
    find,
    findById,
    deleteOne,
    findByCategory
};
