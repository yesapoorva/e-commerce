const Product = require('../models/products.js')

const createProduct = async (req, res) => {
    const { name, description, price, variants } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ message: 'Please provide all required fields: name, description, price, variants' });
    }

    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateProduct = async (req, res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name;
    }
    if (req.body.description != null) {
        res.product.description = req.body.description;
    }
    if (req.body.price != null) {
        res.product.price = req.body.price;
    }
    if (req.body.variants != null) {
        res.product.variants = req.body.variants;
    }

    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        await res.product.remove();
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const searchProducts = async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ message: 'Please provide a search query' });
    }

    try {
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } }, 
                { description: { $regex: query, $options: 'i' } },
                { 'variants.name': { $regex: query, $options: 'i' } }
            ]
        });

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found matching the search query' });
        }

        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {createProduct, getProducts, updateProduct, deleteProduct, searchProducts};