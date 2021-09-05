// create Express app
const express = require('express');
const app = express();

// routes
const root = require('./routes/root');
app.use(root)

module.exports = app;