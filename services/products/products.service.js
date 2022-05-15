import * as DatabaseHandler from '../utils/database.handler.js';

const collection = 'Productos'

async function find() {
    return DatabaseHandler.connectDB(
        async function () {
            const products = await DatabaseHandler.getCollection(collection)
            DatabaseHandler.closeDB()
            return products;
        }
    )
}

async function findById(idToFind) {
    return DatabaseHandler.connectDB(
        async function () {
            const product =  await DatabaseHandler.getById(collection, idToFind);
            DatabaseHandler.closeDB()
            return product;
        }
    )
}

async function findComments(idToFind) {
    let product = await findById(idToFind)
    console.log('asdasd', product)
}

async function deleteOne(productToDelete) {
    return DatabaseHandler.connectDB(
        async function () {
            await DatabaseHandler.remove(collection, productToDelete)
            DatabaseHandler.closeDB()
        }
    )
}

async function updateProduct(productToUpdate) {
    return DatabaseHandler.connectDB(
        async function () {

            await DatabaseHandler.getCollection(collection).updateOne({ _id: productToUpdate }, {
                $set: { name: "Cuerda" },
                $unset: { name: '' }
            })

            DatabaseHandler.closeDB()
        }
    )
}


export {
    find,
    findById,
    deleteOne,
    updateProduct,
    findComments
}
