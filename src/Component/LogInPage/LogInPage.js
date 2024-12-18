import React from 'react'
import"./LogInPage.css";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import home from '../Home/Home';

const login = () => {

  const navigate = useNavigate();
  const handleLogIn =()=>{
    navigate('/home');
  }
    
  return (
    <div class="login-container">
    <h2>Login</h2>
    <form action="#" method="POST">
        {/* <!-- Username Input --> */}
        <span class="icon">&#128100;</span>
        <div class="input-container">
            <input type="text" placeholder="Username" name="username" required/>
        </div>

        {/* <!-- Password Input --> */}
        <span class="icon">&#128274;</span>
        <div class="input-container">
            <input type="password" placeholder="Password" name="password" required/>
        </div>

        {/* <!-- Login Button --> */}
        <button type="submit" class="login-btn" onClick={handleLogIn} >Login</button>

        {/* <!-- Links --> */}
        <div class="link-container">
            <a href="#">Forgot Password?</a>
            <a href="#">Create Account</a>
        </div>
    </form>
</div>

  )
}

export default login
