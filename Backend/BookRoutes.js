const express = require('express')
const router = express.Router()
const BookStore = require('./Modal')


//get all books from database
router.get('/',async(req,res)=>{

    try {
        const books = await BookStore.find()
        if(books.length > 0){
            res.status(200).json(books)
        }
        else{
            res.status(404).json({message: "no book found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//Post book in database
router.post('/',async(req,res)=>{
    try {
        const newBook = new BookStore(
            {title,author,pages,publishedDate} = req.body
        )
        const savedBook = await newBook.save()
        if(!savedBook){
          res.status(404).json({message: 'something went wrong!'})
        }
        res.status(201).json({message: "book created successfully", book: savedBook})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//GET book by id 

router.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const book = await BookStore.findById(id)
        if(book){
            res.status(200).json(book)
        }
        else{
            res.status(404).json({message: "book not found"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Update or put by using ID

router.put('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const Data = req.body
        const updatedBook = await BookStore.findByIdAndUpdate(id,Data,{new: true})
        if(!updatedBook){
            res.status(404).json({message: "book not updated"})
        }
        res.status(200).json({message: "book updated ",bookUpdated: updatedBook})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//DELETE book by ID
router.delete('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const deleteBook  = await BookStore.findByIdAndDelete(id)
        if(!deleteBook){
            res.status(404).json({message: "book not delted yet due to error occured"})
        }
        res.status(200).json({message: "book deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



module.exports = router