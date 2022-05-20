import * as ProductsModel from '../../services/products/products.service.js';
import * as CommentsModel from '../../services/comments/comments.service.js';

export async function showProductById(req, res) {
    const id = req.params.id;

    const product = await ProductsModel.findById(id);
    const comments = await CommentsModel.findByProductId(id);

    res.render('product', { product: product, comments: comments });
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
    const newComment = req.body.text

    await CommentsModel.createComment(product_id, newComment);

    try {
        await ProductsModel.findById(product_id)
    } catch (err) {
        console.log('catch', err)
    }

    res.render('product', { product: await ProductsModel.findById(product_id), comments: await CommentsModel.findByProductId(product_id) })
}

export default {
    showProductById,
    showForm,
    createComment
}