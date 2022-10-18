import React from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import './Header.css'




const Header = () => {

     const logOutUser=()=>{
      
        
       Axios.post('http://127.0.0.1:5000/user/', {}, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '127.0.0.1:3000',
    
          }
    
        },
        { 
        withCredentials: true,
          credentials: 'include'
        }).then(
          
        )

     }
    
    

    return(
      <div className="header">

      <nav className="nav">
           
        <div className="navbar-links">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" style={{textDecoration: 'none'}} className="nav-link" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" style={{textDecoration: 'none'}} className="nav-link" >Signup</Link>
            </li>
            <li className="nav-item">
    
              <Link to="/login" style={{textDecoration: 'none'}} className="nav-link ">Signin</Link>
            </li>
            <li className="nav-item">
              <Link to="/" style={{textDecoration: 'none'}} className="nav-link" onClick={logOutUser} >Logout</Link>
            </li>
            <li className="nav-item">
              <Link to="/book" style={{textDecoration: 'none'}}  className="nav-link">Books</Link>
            </li>
          </ul>
          <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
        </div>
      
    </nav>
    </div>
    );
    
    
};



export default Header;

