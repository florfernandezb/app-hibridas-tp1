import * as ProductsModel from '../../services/products/products.service.js';

export function find(req, res) {
    ProductsModel.find()
        .then(function (products) {
            res.status(200).json(products);
        })
};

export function findById(req, res) {
    const id = req.params.id
    ProductsModel.findById(id)
        .then(function (product) {
            res.status(200).json(product);
        })
};

export function findByCategory() {
    ProductsModel.findByCategory()
}

export function deleteOne(req, res) {
    const id = req.params.id
    ProductsModel.deleteOne(id)
        .then(function() {
            res.status(200).json();
        })
}

export function findComments(req, res) {
    const id = req.params.id
    ProductsModel.findComments(id)
        .then(function() {
            res.status(200).json();
        })
}

export default{
    find,
    findById,
    deleteOne,
    findComments
};
