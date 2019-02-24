const { Router } = require('express')
const router = Router()
const { unlink } = require('fs-extra')
const path = require('path')

const Book = require('../models/Book')

router.get('/api/books', async (req, res) => {
    const books = await Book.find()
    res.json(books)
})

router.post('/api/books', async (req, res) =>{
    const { title, author, isbn } = req.body
    const imagePath = "/uploads/" + req.file.filename;
    const newBook = new Book({ title, author, isbn, imagePath })
    console.log(imagePath)
    await newBook.save()
    res.json({
        error: false,
        //message:'Book save',
        message:imagePath,
    })
})

router.delete('/api/books/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id)
    unlink(path.resolve('./backend/public' + book.imagePath))
    res.json({
        error: false,
        message:'Book delete'
    })
})

module.exports = router