const router = require('express').Router();

const controller = require('../controllers/brands.controller')

router.get('/api/brands', controller.getBrands);
router.post('/api/brands', controller.createBrand);
router.put('/api/brands/:brandId', controller.updateBrand);
router.delete('/api/brands/:brandId', controller.removeBrand);

module.exports = router;