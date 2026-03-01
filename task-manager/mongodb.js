const {MongoClient, ObjectId} = require('mongodb');

//crud operation
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const client = new MongoClient(connectionUrl);

const id = new ObjectId();
console.log(id.id.length);
console.log(id.toHexString().length);
console.log(id.getTimestamp());

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB server');
        const db = client.db(databaseName);

        // Insert a single document
        db.collection('users').insertOne({
            _id:  id,
            name: 'vikram',
            age:  25
        }, (error, result) => {
            if (error) {
                return console.error('Error inserting document:', error);
            }

            console.log('Document inserted successfully:', result.count);
        });

        // Insert multiple documents
        const result = db.collection('users').insertMany([
            {name: 'John', age: 25},
            {name: 'Jane', age: 30},
            {name: 'Bob', age: 22},
            {name: 'Alice', age: 28},
            {name: 'Eve', age: 35, isAdmin: true},
        ], (error, result) => {
            if (error) {
                return console.error('Error inserting documents:', error);
            }
            return console.log('Documents inserted successfully:', result.count);
        })

        console.log((await result).insertedCount);

        // Challenge
        const result = db.collection('tasks').insertMany([
            {title: 'Task 1', description: 'Description 1', completed: false},
            {title: 'Task 2', description: 'Description 2', completed: true},
            {title: 'Task 3', description: 'Description 3', completed: false},
        ], (error, result) => {
            if (error) {
                return console.error('Error inserting documents:', error);
            }
            console.log('Documents inserted successfully:', result.count);
        });

        // Read data
        const result = db.collection('users').findOne({_id: new ObjectId("69a45db8fde7c7d74def8e56")}, (error, result) => {
            if (error) {
                return console.error('Error finding document:', error);
            }

        })

        console.log(await result);

        const result = db.collection('users').countDocuments({name: "John"});
        console.log(result);


    } catch (error) {
        console.error('Unable to connect to MongoDB server:', error);
    }
}

connectToDatabase();