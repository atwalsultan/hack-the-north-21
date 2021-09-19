// Imports
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 8080;
const products = require("./routes/products");

// CORS
const cors = require("cors");
app.use(cors());

// Environment variables 
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('connected'))
.catch((e) => console.log(e))

// Middleware for routes
app.use("/api/products", products);

// Specify port and listen
app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`);
});

