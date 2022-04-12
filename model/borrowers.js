const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const bookLenders = new Schema({
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
    createdAt: {type: Date, default: Date.now}
})

const Lenders = mongoose.model('lender', bookLenders)

module.exports = Lenders