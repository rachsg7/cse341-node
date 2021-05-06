const express = require('express');
const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();

// This points to /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct); // Just pass reference to this function

// /admin/products => GET
router.get('/products', adminController.getProducts);

// app.post only triggers for post requests
// Can also use .get, .delete, .patch, .put
// This points to /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;