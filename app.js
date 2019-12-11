const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const testR = require('./api/routes/test');
mongoose.connect('mongodb+srv://iamrjb:iamrjb11@cluster0-lu43k.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true },
    console.log("Connected")

)

app.use(bodyParser.json());

app.use('/test', testR);
//
module.exports = app;