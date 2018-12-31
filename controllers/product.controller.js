const Product = require('./../models/products');


exports.test = function (req, res) {
    Product.find((err, product) => {
        if(err) next(err);
        res.send(product)
    })
};


exports.product_add = (req, res) => {
let product = new Product({name: req.body.name, price: req.body.price});
product.save((err) => {
    if (err) next(err);
    res.send('Product Created successfully');
})
}

exports.product_update = (req, res) => {
    Product.findByIdAndUpdate('5c2a4af425e71b28a796763b', {$set: req.body}, function (err, product) {
        if (err) next(err);
        res.send(product);
    });
};

exports.product_delete = (req,res) => {
    Product.findByIdAndRemove('5c2a4af425e71b28a796763b', (err) => {
        if (err) next(err);
        res.send('il est bien supprimé')
    })
}

module.exports = exports