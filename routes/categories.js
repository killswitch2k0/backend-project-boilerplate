const router = require('express').Router();
const controller = require('../controllers/categories.controller')

router.get('/api/categories', controller.getCategories);
router.post('/api/categories', controller.createCategory);
router.put('/api/categories/:categoryId', controller.updateCategory);
router.delete('/api/categories/:categoryId', controller.removeCategory);

module.exports = router;