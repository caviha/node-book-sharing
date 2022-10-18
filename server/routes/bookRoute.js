

const express = require('express');
const Book = require('../models/Book');
const router = express.Router();
const AsyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');
//const checkAuth = require('../middleware/auth');


//creaate book
router.post('/createbook', AsyncHandler( async(req, res)=>{
    const book = await Book.create(req.body);
    if(book){
        res.status(200);
        res.json(book);
}else{
    res.status(500);
    throw new error('Book creation failed')
}
}
));


//Fetch book
router.get('/fetchbook', AsyncHandler( async(req, res)=>{
    const book = await Book.find({});
    if(book){
        res.status(200);
        res.json(book);
}else{
    res.status(500);
    throw new error('There are no books')
}
}
));


//Update book
router.put('/:id', AsyncHandler(async(req, res)=>{
    const book = await Book.findById(req.params.id);
    if(book){
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true} );
        res.status(200).json(updatedBook);
    }else{
        res.status(500);
        throw new error('update failed'); 
    }
}))


//Delete book

router.delete('/:id',  AsyncHandler(async(req, res)=>{
    
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Book deleted'
        })
    }
    catch(error){
         res.json(error);
    }
}))


module.exports = router;