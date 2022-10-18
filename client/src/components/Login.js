import React, {useState} from 'react';
import Axios from 'axios';
import './Login.css'

const Login = () => {
    const [user, setUser] = useState({email:"", password:""});
    
    const handleChange = (e)=>{
      setUser({...user, [e.target.name]: e.target.value});
    

    };

    const handleSubmit = (e)=>{
      e.preventDefault();
      setUser({email:"", password:""})
     Axios.post('http://127.0.0.1:5000/user/signIn',user, 
    
      
    )
    .then( data =>{
      localStorage.setItem()
    }
      
      )
    
    .catch(err=>console.log(err))
      
    };
        

    
    return (
        <div className='login-form'>
          
        <form onSubmit={handleSubmit} className="form-group">
        <div>
        <input type='email' name='email' placeholder='Email' value = {user.email} onChange = {handleChange}/>
        </div>
        <div>
        <input type='password' name='password' placeholder='Password' value = {user.password} onChange = {handleChange}/>
        </div>
        <div>
          <input className='input_btn' type='submit' value='Login' />
        </div>
      
      </form> 
        </div>
    );
};

export default Login;