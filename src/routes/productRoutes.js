const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/', productController.getProducts);
router.get('/key/:productKey', productController.getProductByKey);

module.exports = router;