import * as CategoriesModel from '../../services/categories/categories.service.js';

function find(req, res) {
    CategoriesModel.find()
        .then(function (products) {
            res.status(200).json(products);
        })
};

function createCategory(req, res) {
    const categoryToAdd = req.body;

    CategoriesModel.createCategory(categoryToAdd)
        .then(function() {
            res.status(200).json()
        })
}

function updateCategory(req, res) {
    const categoryToUpdate = req.params.id;
    const data = req.body

    CategoriesModel.updateCategory(categoryToUpdate, data)
        .then(function() {
            res.status(200).json()
        })
}

export default {
    find,
    createCategory,
    updateCategory
}