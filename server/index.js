const express = require('express')
const mongoose = require('mongoose')


require('dotenv').config();
const key = process.env.MONGO_URL;


const app = express();

const PORT = 8080;


// console.log(key);


// mongoose.connect(process.env.MONGO_URL)
// .then(()=>console.log('connected'))
// .catch((e) => console.log(e))



mongoose.connect('mongodb+srv://atwalsultan:atwalsultan@cluster0.xfj36.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log('connected'))
.catch((e) => console.log(e))

app.get('/', (req, res) => {

    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`);
});

