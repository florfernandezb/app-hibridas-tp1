import * as CommentsModel from '../../../services/comments/comments.service.js'

function find(req, res) {
    CommentsModel.find()
        .then(function (comments) {
            res.status(200).json(comments);
        }).catch(function (err) {
            res.status(404).json(`Algo salió mal ${err}. No hemos encontrado el producto: #${productId}`);
        })
};

function findByProductId(req, res) {
    const productId = req.params.productId;
    CommentsModel.findByProductId(productId)
        .then(function (comments) {
            res.status(200).json(comments);
        })
        .catch(function (err) {
            res.status(404).json(`Algo salió mal ${err}. No hemos encontrado el producto: #${productId}`);
        })
}

function createComment(req, res) {
    const productId = req.params.productId;
    const data = req.body.text
    CommentsModel.createComment(productId, data)
        .then(function () {
            res.status(201).json();
        })
}

function updateComment(req, res) {
    const commentToUpdate = req.params.commentId;
    const data = req.body

    CommentsModel.updateComment(commentToUpdate, data)
        .then(function () {
            res.status(200).json()
        })
}

export default {
    find,
    findByProductId,
    createComment,
    updateComment
}
