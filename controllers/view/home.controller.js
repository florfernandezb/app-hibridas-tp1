import * as ProductsModel from '../../services/products/products.service.js';
import * as CategoriesModel from '../../services/categories/categories.service.js';

export async function showAllProducts(req, res) {

    const prod = await ProductsModel.find()
    const cat = await CategoriesModel.find()

    res.render('home', { products: prod, categories: cat })
}

export async function showProductsByCategory(req, res) {
    let categorySelected, products;
    const category = req.body.categories

    const categories = await CategoriesModel.find()

    if (category === 'all') {
        products = await ProductsModel.find();
    } else {
        categories.forEach(element => {
            if (element._id == category) {
                categorySelected = element
            }
        });
        products = await ProductsModel.findByCategory(categorySelected);
    }
    
    res.render('home', { products: products, categories: categories });
}

export default {
    showAllProducts,
    showProductsByCategory
}
