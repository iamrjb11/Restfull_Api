const express = require('express');
const app = express();

const testR = require('./api/routes/test');


app.use('/test', testR);

module.exports = app;