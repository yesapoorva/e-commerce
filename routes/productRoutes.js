const express = require('express');
const router = express.Router();
const {createProduct, getProducts, updateProduct, deleteProduct} = require("../controllers/products.js");
const getProductById = require("../middlewares/getProductById.js")

router.post('/create', createProduct);
router.get('/getAll', getProducts);
router.patch('/:id', getProductById, updateProduct);
router.delete('/:id', getProductById, deleteProduct);

router.get('/:id', getProductById, (req, res) => {
    res.json(res.product);
});
    

module.exports = router