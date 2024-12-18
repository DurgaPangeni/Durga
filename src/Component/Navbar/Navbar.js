import React from 'react'
import { NavLink } from 'react-router-dom'
import"./navbar.css";


const Navbar = () => {
    
  return(
    <navbar className="navbar">
        <div class="logo">
        <span class="icon">💊</span>
        <h1><a href='http://localhost:3000/Home'>Telemedicine</a></h1>
        </div>
        <div>
        <ul>
            <li>
                <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/AboutUs">AboutUs</NavLink>
            </li>
            <li>
                <NavLink to="/Services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/Appointment">Appointment</NavLink>
            </li>
            <li>
                <NavLink to="/Profile">Profile</NavLink>
            </li>
            <li style = {{float:'right'}}>
                <NavLink to="/LogInPage">Login</NavLink>
            </li>
        </ul>
        </div>
    </navbar>
 ) 
}

export default Navbar
