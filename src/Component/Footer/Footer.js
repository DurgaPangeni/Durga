import React from 'react'
import"./Footer.css";

const Footer = () => {
  return (
    <div>
     <footer class="footer">
    <div class="footer-content">
        <p>&copy; 2024 [Durga Company]. All rights reserved.</p>
        <ul class="footer-links">
            <li><a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
            <li><span class="phone"><i class="fas fa-phone-alt"></i> (123) 456-7890</span></li>
        </ul>
    </div>
</footer>
 
    </div>
  )
}

export default Footer
