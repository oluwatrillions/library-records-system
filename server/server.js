const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config({ path: './config.env'});

let port = process.env.PORT || 3500
let uri = process.env.MONGO_URI
let host = process.env.HOST

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    book: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    createdAt: {type: Date, default: Date.now}
})



mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log('connected')})
    .catch((error) => {
    console.log(error)})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('it works');
})

require('cors')
// app.use(express.json)


app.post('/register', (req, res) => {
    const name = req.body.name
    console.log(name);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});