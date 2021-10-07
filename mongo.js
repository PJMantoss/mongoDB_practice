const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://pj:kingdom@cluster0.kxgzl.mongodb.net/products_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };

    const client = new MongoClient(url);

    try{
        await client.connect(); //Establishes connection with mongodb server (cluster)
        const db = client.db();
        const result = await db.collection('products').insertOne(newProduct);
    }catch(err){
        res.json({ message: 'Could not store data' });
    };

    client.close(); //close connection

    res.json(newProduct);
};

const getProducts = async (req, res, next) => {
    const client = new MongoClient(url);

    let products;

    try{
        await client.connect();
        const db = client.db();
        products = await db.collection('products').find().toArray();
    }catch(err){
        res.json({ message: 'Could not retrieve products' });
    }

    client.close();

    res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;