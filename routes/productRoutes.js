const express = require('express');
const router = express.Router();
const {createProduct, getProducts, updateProduct, deleteProduct, searchProducts} = require("../controllers/products.js");
const getProductById = require("../middlewares/getProductById.js")

router.post('/create', createProduct);
router.get('/getAll', getProducts);
router.patch('/update/:id', getProductById, updateProduct);
router.delete('/delete/:id', getProductById, deleteProduct);

router.get('/getOne/:id', getProductById, (req, res) => {
    res.json(res.product);
});

router.get('/search', searchProducts);

module.exports = router