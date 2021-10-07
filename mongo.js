const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://Toss:helloma@cluster0.kxgzl.mongodb.net/products_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };

    const client = new MongoClient(url);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;