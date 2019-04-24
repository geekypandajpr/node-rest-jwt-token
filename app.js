// app.js

const express = require('express');
const bodyParser = require('body-parser');

const auth = require('./utils/auth')();
const cors = require('./utils/cors');

const users = require('./routes/users');
const roles = require('./routes/roles');
const collections = require('./routes/collections');
const groups = require('./routes/groups');
const items = require('./routes/items');

const config = require('./config');

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || config.getMongoURL();
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(auth.initialize());
app.use(cors);

app.use('/users', users);
app.use('/collections', collections);
app.use('/groups', groups);
app.use('/items', items);
app.use('/roles', roles);


app.listen(config.getPortNumber(), () => {
    console.log('Server is up and running on port numner ' + config.getPortNumber());
});
