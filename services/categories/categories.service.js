import * as DatabaseHandler from '../utils/database.handler.js';

const collection = 'Categories';

async function find() {
    return DatabaseHandler.connectDB(
        async function () {
            const category = await DatabaseHandler.find(collection)
            DatabaseHandler.closeDB()
            return category;
        }
    )
}

async function createCategory(categoryToAdd) {
    DatabaseHandler.connectDB(
        async function () {
            await DatabaseHandler.create(collection, categoryToAdd)
            DatabaseHandler.closeDB();
        }
    )
}

async function updateCategory(id, data) {
    DatabaseHandler.connectDB(
        async function () {
            await DatabaseHandler.update(collection, id, data);
            DatabaseHandler.closeDB();
        }
    )
}

export {
    find,
    createCategory,
    updateCategory
}
