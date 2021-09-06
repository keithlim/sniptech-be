// create Express app
const express = require('express');

const app = express();
var cors = require('cors');
app.use(cors());

// Express middleware
app.use(express.urlencoded({ extended: true })); // helps with parsing application/x-www-form-urlencoded

// routes
const root = require('./routes/root');
app.use(root);

const url = require('./routes/url');
app.use('/url', url);

module.exports = app;