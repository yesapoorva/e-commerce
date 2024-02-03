const connectDB = require('../config/db.js'); 
const mongoose = require('mongoose');
const Product = require('../models/products.js');

describe('Product Model', () => {
    beforeAll(async () => {
        await connectDB();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should store and retrieve a product correctly', async () => {
        const newProduct = new Product({
            name: 'Test Product',
            description: 'This is a test product',
            price: 100.00,
            variants: [{
                name: 'Variant 1',
                SKU: 'SKU123',
                additionalCost: 10.00,
                stockCount: 50
            }]
        });

        await newProduct.save();

        const retrievedProduct = await Product.findOne({ name: 'Test Product' });

        expect(retrievedProduct).toBeDefined();
        expect(retrievedProduct.name).toBe('Test Product');
        expect(retrievedProduct.description).toBe('This is a test product');
        expect(retrievedProduct.price).toBe(100.00);
        expect(retrievedProduct.variants).toHaveLength(1);
        expect(retrievedProduct.variants[0].name).toBe('Variant 1');
    });
});
