const mongoose = require('mongoose');


//User schema

const BookSchema = new mongoose.Schema({

    category:{
        type: String,
        required: [true, 'Book category required']

    },
    author: {
        type: String,
        required: true,
         
    },
    title:{

        type: String,
        required: true,
         
    },
    createdBy:{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true
    },
},
    {
        timestamp: true
});



const Book = mongoose.model('Book', BookSchema);
module.exports= Book;