const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// This points to /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product' });
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// app.post only triggers for post requests
// Can also use .get, .delete, .patch, .put
// This points to /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;