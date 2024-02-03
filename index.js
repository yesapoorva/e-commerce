const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./config/db.js");
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes.js')
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(bodyParser.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;