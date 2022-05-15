import * as DatabaseHandler from '../utils/database.handler.js';

const collection = 'Categories';

async function find() {
    return DatabaseHandler.connectDB(
        async function () {
            const products = await DatabaseHandler.getCollection(collection)
            DatabaseHandler.closeDB()
            return products;
        }
    )
}

async function createCategory(categoryToAdd) {
    DatabaseHandler.connectDB(
        async function () {
            DatabaseHandler.create(collection, categoryToAdd)
        }
    )
}

async function updateCategory(id, data) {
    DatabaseHandler.connectDB(
        async function () {
            DatabaseHandler.update(collection, id, data)
        }
    )
}

export {
    find,
    createCategory,
    updateCategory
}
