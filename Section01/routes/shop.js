const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { prods: products, docTitle: 'Shop', path: '/' }); // For use with pug - we set view engine and path to views and pug, so no need to add it here
    //res.sendFile(path.join(rootDir, 'views', 'shop.html')); // Path is absolute
});

module.exports = router;