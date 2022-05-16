import * as DatabaseHandler from '../utils/database.handler.js';

const collection = 'Comments'

export async function find() {
    return DatabaseHandler.connectDB(
        async function () {
            const comments = await DatabaseHandler.find(collection)
            DatabaseHandler.closeDB()
            return comments;
        }
    )
}

export async function findByProductId(id) {
    return DatabaseHandler.connectDB(
        async function () {
            let filter = { 'product_id': await DatabaseHandler.parseToObjectId(id) }
            const comments = await DatabaseHandler.filter(collection, filter)
            DatabaseHandler.closeDB();
            return comments;
        }
    )
}

export async function createComment(idProduct, data) {
    DatabaseHandler.connectDB(
        async function () {
            let newComment = { 'product_id': await DatabaseHandler.parseToObjectId(idProduct), 'text': data };
            await DatabaseHandler.create(collection, newComment);
            DatabaseHandler.closeDB();
        }
    )
}

export async function updateComment(id, data) {
    DatabaseHandler.connectDB(
        async function () {
            console.log(id, data)
            await DatabaseHandler.update(collection, id, data);
            DatabaseHandler.closeDB();
        }
    )
}

export default {
    find,
    findByProductId,
    createComment
}