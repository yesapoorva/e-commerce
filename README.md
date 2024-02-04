# e-commerce system using Node.js

This is a RESTful API for managing products for an e-commerce system. It allows users to perform CRUD operations on products, search for products by name, description, or variant name.

Installation
Clone this repository to your local machine: 
git clone https://github.com/yesapoorva/e-commerce.git

Navigate to the project directory: 
cd e-commerce

Install dependencies: 
npm install

Configure environment variables: 
Create a .env file in the root directory

Define the following environment variables:
PORT=6000
MONGO_URI=your-mongodb-connection-string
Replace your-mongodb-connection-string with your MongoDB connection string.

Usage
Start the server: 
npm start

The server will be running at http://localhost:6000 by default.

Endpoints
POST /api/products/create: 
Create a new product.

GET /api/products/getAll: 
Retrieve all products.

GET /api/products/getOne: 
Retrieve a product by ID.

GET /api/products/search: 
Search for products by name, description, or variant name.

PATCH /api/products/update/:id: 
Update a product by ID.

DELETE /api/products/delete/:id: 
Delete a product by ID.

Testing
To run tests, use the following command: 
npm test

Architecture
The project follows a Express.js architecture with the following components:

Routes: 
Define API endpoints and route handlers.

Controllers: 
Handle business logic and interact with the database.

Models: 
Define MongoDB schemas and models for data storage.

Middleware: 
Implement middleware functions for request processing.

Tests: 
Use Jest and Supertest for testing route endpoints and model functionality.

Deployed API Links:

GET: https://apoorvasecommerce.onrender.com/api/products/getAll

GET: https://apoorvasecommerce.onrender.com/api/products/getOne

POST: https://apoorvasecommerce.onrender.com/api/products/create

PATCH: https://apoorvasecommerce.onrender.com/api/products/update

DELETE: https://apoorvasecommerce.onrender.com/api/products/delete

GET: https://apoorvasecommerce.onrender.com/api/products/search?query=Apple
