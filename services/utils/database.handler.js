import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = await client.db('HechoPorVickiDB');

async function connectDB(action) {
    return await client.connect()
        .then(action)
        .catch(function () {
            console.log(`No me pude conectar a ${db.namespace}`);
        })
}

async function find(collection) {
    return await db.collection(collection).find().toArray();
}

async function create(collection, data) {
    await db.collection(collection).insertOne(data);
}

async function update(collection, id, data) {
    await db.collection(collection).updateOne({ _id: new ObjectId(id) }, { $set: data })
}

async function remove(collection, id) {
    await db.collection(collection).deleteOne({ _id: new ObjectId(id) })
}

async function findById(collection, id) {
    return await db.collection(collection).find({ _id: ObjectId(id) }).toArray()
}

async function filter(collection, filter) {
    return await db.collection(collection).find(filter).toArray();
}

async function parseToObjectId(id) {
    return new ObjectId(id)
}

async function closeDB() {
    client.close();
}

export {
    connectDB,
    find,
    create,
    update,
    remove,
    findById,
    filter,
    closeDB,
    parseToObjectId,
}
