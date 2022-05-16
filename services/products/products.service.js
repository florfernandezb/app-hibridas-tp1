import * as DatabaseHandler from '../utils/database.handler.js';

const collection = 'Productos'

async function find() {
    return DatabaseHandler.connectDB(
        async function () {
            const products = await DatabaseHandler.find(collection)
            DatabaseHandler.closeDB()
            return products;
        }
    )
}

async function findById(idToFind) {
    return DatabaseHandler.connectDB(
        async function () {
            const product = await DatabaseHandler.findById(idToFind);
            DatabaseHandler.closeDB()
            return product;
        }
    )
}

async function deleteOne(productToDelete) {
    return DatabaseHandler.connectDB(
        async function () {
            await DatabaseHandler.remove(collection, productToDelete)
            DatabaseHandler.closeDB()
        }
    )
}

async function findByCategory(category) {
    return DatabaseHandler.connectDB(
        async function () {
            const filter = { "category": { "_id": await DatabaseHandler.parseToObjectId(category.categoryId), "name": category.categoryName } }
            
            let products = await DatabaseHandler.filter(collection, filter);

            DatabaseHandler.closeDB();
            return products;
        }
    )
}

export {
    find,
    findById,
    deleteOne,
    findByCategory
}
