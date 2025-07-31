const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');
const validate = require('../middleware/validateProduct');

// Bonus: search endpoint
router.get('/search', controller.searchProducts);

// CRUD endpoints
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
router.post('/', validate, controller.createProduct);
router.put('/:id', validate, controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
