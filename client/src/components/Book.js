import React, {useState} from 'react';
import Axios from 'axios';


const Book = () => {
    const [Book, setBook] = useState({category:"", author:"", title:"", createdBy:""});
    
    const handleChange = (e)=>{
      setBook({...Book, [e.target.name]: e.target.value});
    

    };

    const handleSubmit = (e)=>{
      e.preventDefault();
      setBook({category:"", author:"", title:"", createdBy:""})
     Axios.post('http://127.0.0.1:5000/book/createbook',Book, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '127.0.0.1:3000',

      },
    },
    { 
    withCredentials: true,
    credentials: 'include'
    }
      
    )
    .then( )
    
    .catch(err=>console.log(err))
      
    };
        
    return (
        <div className='login-form'>
          
        <form onSubmit={handleSubmit} className="form-group">
        <div>
        <input type='text' name='category' placeholder='category' value = {Book.category} onChange = {handleChange}/>
        </div>
        <div>
        <input type='text' name='author' placeholder='author' value = {Book.author} onChange = {handleChange}/>
        </div>
        <div>
        <input type='text' name='title' placeholder='title' value = {Book.title} onChange = {handleChange}/>
        </div>
        <div>
        <div>
        <input type='text' name='createdBy' placeholder='createdBy' value = {Book.createdBy} onChange = {handleChange}/>
        </div>
          <input className='input_btn' type='submit' value='Add Book' />
        </div>
      
      </form> 
        </div>
        
    );
};

export default Book;