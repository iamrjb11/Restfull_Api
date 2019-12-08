const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const testR = require('./api/routes/test');
app.use(bodyParser.json());

app.use('/test', testR);
//
module.exports = app;