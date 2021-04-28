const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// This points to /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// app.post only triggers for post requests
// Can also use .get, .delete, .patch, .put
// This points to /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;