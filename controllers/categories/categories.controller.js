import * as CategoriesModel from '../../services/categories/categories.service.js';

export function showAllCategories(req, res) {
    CategoriesModel.find()
        .then(function (categories) {
            res.render('home', { categories: categories})
        })
}

export default {
    showAllCategories,
}
