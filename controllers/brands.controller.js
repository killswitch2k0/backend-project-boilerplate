
function getBrands(req, res) {
    res.json([])
}

function updateBrand(req, res) {
    const brandId = req.params.brandId;
    const brand = req.body;

    res.json(brand)
}

function removeBrand(req, res) {
    const brandId = req.params.brandId;

    res.json({})
}

function createBrand(req, res) {
    const brand = req.body;

    res.json(brand);
}

module.exports = {
    getBrands,
    updateBrand,
    removeBrand,
    createBrand
}