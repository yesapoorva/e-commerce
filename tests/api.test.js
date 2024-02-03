const request = require('supertest');
const app = require('../index'); 

describe('API Endpoints', () => {
    it('should create a new product', async () => {
        const newProduct = {
            name: 'Test Product',
            description: 'This is a test product',
            price: 100.00,
            variants: [{
                name: 'Variant 1',
                SKU: 'SKU123',
                additionalCost: 10.00,
                stockCount: 50
            }]
        };

        const res = await request(app)
            .post('/api/products/create')
            .send(newProduct);

        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual(newProduct.name);
    }, 10000);

    it('should retrieve products', async () => {
        const res = await request(app)
            .get('/api/products/getAll');

        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should search for products by name', async () => {
        const res = await request(app)
            .get('/api/products/search')
            .query({ query: 'Samsung' }); 

        expect(res.statusCode).toBe(200);
    });
});