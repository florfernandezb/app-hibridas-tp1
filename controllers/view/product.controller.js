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

export async function showForm(req, res) {
    const productName = req.params.productName
    const product = await ProductsModel.filter(
        { 'name': productName }
    )
    res.render("new-comment", { product })
}

export async function createComment(req, res) {
    const product_id = req.body.productId
    const comment = req.body.text
    await CommentsModel.createComment(product_id, comment);

    res.redirect('/');
}

async function setupProductData() {
    const product = await ProductsModel.findById(productId);
    const comments = await CommentsModel.findByProductId(productId);
    return { product: product, comments: comments }
}

export default {
    showProductById,
    showForm,
    createComment
}