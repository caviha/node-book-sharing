import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import Book from './components/Book';

export default function Links(){
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/book' element={<Book/>} />
                <Route path='*' element={<NotFound/>} />
                
            </Routes>
        </div>
    );
};

