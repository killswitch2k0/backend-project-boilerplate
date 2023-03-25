const router = require('express').Router();
const controller = require('../controllers/products.controller')

router.get('/api/products', controller.getProducts);
router.post('/api/products', controller.createProduct);
router.put('/api/products/:productId', controller.updateProduct);
router.delete('/api/products/:productId', controller.removeProduct);

module.exports = router;