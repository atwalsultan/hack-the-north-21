const express = require('express')
const mongoose = require('mongoose')


require('dotenv').config({path: 'server/.env'});

const app = express();

const PORT = 8080;

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('connected'))
.catch((e) => console.log(e))

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`);
});

