const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect(
    'mongodb+srv://pj:kingdom@cluster0.kxgzl.mongodb.net/products_test?retryWrites=true&w=majority'
).then(() => {
    console.log('Connected to database!')
}).catch();

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    })
};

exports. createProduct = createProduct;