import React from 'react'
import { NavLink } from 'react-router-dom'
import"./navbar.css";
import Footer from '../Footer/Footer';

const Navbar = () => {
    
  return(
    <navbar className="navbar">
        <div class="logo">
        <span class="icon">💊</span>
        <h1><a href='http://localhost:3000/Home'>Telemedicine</a></h1>
        </div>
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
        </ul>
    </navbar>
 ) 
}

export default Navbar
