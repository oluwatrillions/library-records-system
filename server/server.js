const express = require('express')
const mongoose = require('mongoose')
const Schema = require('../model/borrowers')
const app = express()

require('dotenv').config({ path: './config.env' });
require('cors')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let port = process.env.PORT || 3500
let uri = process.env.MONGO_URI


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



app.post('/register', async (req, res) => {
   try {
       const lend = new Schema({
           name: req.body.name,
           address: req.body.address,
           age: req.body.age,
           book: req.body.book,
       });

        console.log("name : ", req.body.name)

       await Schema.create(lend);
       res.send('Lender added')
       
   } catch (error) {
       console.log({message: error});
   }
});


app.get('/registerList', (req, res) => {
        Schema.find({}, (err, result) => {
        res.send(result)
        console.log(result);
        console.log(err);
    })
})



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});