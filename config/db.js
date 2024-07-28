const mongoose = require('mongoose');
require('dotenv').config();
//define the mongoDB connection URL

const mongURL = process.env.MONGODB_URL;

// setup up MONGODB connection

mongoose.connect(mongURL)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log( err => 'Could not connect to MongoDB...',err))

const db = mongoose.connection;

//defin event listeners for database connections

// define  even listeners for database connection

db.on('connection', () =>{
    console.log('Connected to MongoDB server');
}); 

db.on('error', (err) =>{
    console.log('MongoDB connection error', err);
});

db.on('disconnected', () =>{
    console.log('MongoDB disconnected');
})


// exporst db  connection
