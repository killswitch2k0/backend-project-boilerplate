
function getCategories(req, res) {
    res.json([])
}

function updateCategory(req, res) {
    const categoryId = req.params.categoryId;
    const category = req.body;

    res.json(category)
}

function removeCategory(req, res) {
    const categoryId = req.params.categoryId;

    res.json({})
}

function createCategory(req, res) {
    const category = req.body;

    res.json(category);
}

module.exports = {
    getCategories,
    updateCategory,
    removeCategory,
    createCategory
}