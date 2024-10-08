const mongoose  = require('mongoose')

const Books = new mongoose.Schema({
    title: {type: String,required: true},
    author: {type: String,required: true},
    pages: {type: Number,required: true},
    publishedDate: {type: String,required: true}
},{timestamps: true})


const BooKStore = mongoose.model('BookStore',Books)

module.exports = BooKStore