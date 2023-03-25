
function getProducts(req, res) {
    res.json([])
}

function updateProduct(req, res) {
    const productId = req.params.productId;
    const product = req.body;

    res.json(product)
}

function removeProduct(req, res) {
    const productId = req.params.productId;

    res.json({})
}

function createProduct(req, res) {
    const product = req.body;

    res.json(product);
}

module.exports = {
    getProducts,
    updateProduct,
    removeProduct,
    createProduct
}