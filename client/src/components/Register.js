import React from 'react';
import Axios  from 'axios';
import { useState } from 'react';
import './Register.css'

const Register = () => {
    const [user, setUser] = useState({name: "", email:"", password:""});
    const handleChange = (e)=>{
      setUser({...user, [e.target.name]: e.target.value});

    };

    const handleSubmit = (e)=>{
      e.preventDefault();
      
      //const data = JSON.stringify(user);
      //console.log(data)
      //console.log(JSON.stringify(user))
    Axios.post('http://127.0.0.1:5000/user/signUp',user).then(console.log(user)).catch(err=>console.log(err))
      //setUser({name:"", email:"", password:""})
    };


    return(
      <div className='register-form'>
      <form className='form-group' onSubmit={handleSubmit}>
        <div>
         <input type='text' name='name' placeholder='Name' value = {user.name} onChange = {handleChange}/>
        </div>
        <div>
         
        <input type='email' name='email' placeholder='Email' value = {user.email} onChange = {handleChange}/>
        </div>
        <div>
          
        <input type='password' name='password' placeholder='Password' value = {user.password} onChange = {handleChange}/>
        </div>
        <div>
        <input className='input_btn' type='submit' value='Signup' />
        </div>
      </form> 
      </div>    
    );      
};

export default Register;