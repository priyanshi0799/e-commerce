const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

// /admin => GET
router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);
router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin => POST
router.post('/add-product', adminController.postAddProduct);

router.post('/edit-product', adminController.postEditProduct);

module.exports = router;
