import * as ProductsModel from '../../services/products/products.service.js';
import * as CommentsModel from '../../services/comments/comments.service.js';

let productId;

export async function showProductById(req, res) {
    const id = req.params.id;

    saveProductId(id, res);
    const data = await setupProductData();

    res.render('product', data);

}

async function saveProductId(id) {
    productId = id;
}

export async function createComment(req, res) {
    if (productId != undefined) {
        await CommentsModel.createComment(productId, req.body.comment);

        // res.render('product', { product: product, comments: comments });

        const data = await setupProductData(productId);

        res.redirect('/');
    } else {
        console.log('something went wrong');
        res.render('home', data);
    }
}

async function setupProductData() {
    console.log("prodid", productId)
    const product = await ProductsModel.findById(productId);
    // const product = await ProductsModel.filter(productId)
    const comments = await CommentsModel.findByProductId(productId);
    return { product: product, comments: comments }
}

async function getProductData() {

}

async function getCommentsData() {
    
}

export default {
    showProductById,
    createComment
}