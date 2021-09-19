const express = require('express')
const mongoose = require('mongoose')

const app = express();

const cors = require("cors");
app.use(cors());

require('dotenv').config();

const PORT = 8080;
const products = require("./routes/products");

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('connected'))
.catch((e) => console.log(e))

app.use("/api/products", products);

app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`);
});

