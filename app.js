const express = require('express');
//const bodyParser = require('body-parser');
const mongoPractice = require('./mongo');


const app = express();

//app.use(bodyParser.json());

app.use(express.json());

app.post('/products');

app.get('/products');

app.listen(3000);