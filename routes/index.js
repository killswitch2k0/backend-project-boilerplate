const router = require('express').Router();

const productsRouter = require('./products')
const categoriesRouter = require('./categories')
const brandsRouter = require('./brands')

router.use(productsRouter)
router.use(categoriesRouter)
router.use(brandsRouter)

module.exports = router;