const express = require('express');

const router = express.Router();
const shopController = require('../controllers/shop');

// GET Routes
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

//POST routes
router.post('/cart', shopController.postCart);
module.exports = router;
