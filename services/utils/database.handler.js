import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017');
const db = await client.db('HechoPorVickiDB');

async function connectDB(action) {
    return await client.connect()
        .then(action)
        .catch(function () {
            console.log(`No me pude conectar a ${db.namespace}`);
        })
}

async function getCollection(collection) {
    return await db.collection(collection).find().toArray();
}

async function create(collection, data) {
    await db.collection(collection).insertOne(data);
}

async function update(collection, id, data) {
    await db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data })
}

async function remove(collection, id) {
    await db.collection(collection).deleteOne({ _id: ObjectId(id) })
}

async function getById(collection, id) {
    return await db.collection(collection).find({ _id: ObjectId(id) }).toArray()
}



async function closeDB() {
    client.close();
}

export {
    connectDB,
    getCollection,
    create,
    update,
    remove,
    getById,
    closeDB,
}
