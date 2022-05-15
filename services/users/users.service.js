import * as DatabaseHandler from '../utils/database.handler.js';

const collection = 'Users';

async function find() {
    return DatabaseHandler.connectDB(
        async function () {
            const products = await DatabaseHandler.getCollection(collection)
            DatabaseHandler.closeDB()
            return products;
        }
    )
}

export {
    find
}
