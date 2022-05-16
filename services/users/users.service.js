import * as DatabaseHandler from '../utils/database.handler.js';

const collection = 'Users';

async function find() {
    return DatabaseHandler.connectDB(
        async function () {
            const users = await DatabaseHandler.find(collection)
            DatabaseHandler.closeDB()
            return users;
        }
    )
}

export {
    find
}
