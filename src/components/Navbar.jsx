import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import custom CSS for navbar styling

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <nav className="navbar">
        <div className="navbar-container">
        <div className="left-part">
            {/* Logo */}
            {/* <img className='nav-logo-img' src="logo.jpeg" alt="logo-img" /> */}
            
            <div className="menu-container">
                {/* Menu button */}
                <IoMenu className="menu-icon" onClick={toggleMenu} size={30}/>

                {/* Side window */}
                {isMenuOpen && (
                    <div className="side-window">
                    <ul>
                        <li><Link to="/" style={{textDecoration:"none", color:"white"}}>About Us</Link></li>
                        <li><Link to="/" style={{textDecoration:"none", color:"white"}}>Contact</Link></li>
                        <li><Link to="/" style={{textDecoration:"none", color:"white"}}>Newsletter</Link></li>
                    </ul>
                    </div>
                )}
            </div>
            <div className="nav-title-name">LIT</div>
        </div>
        <div className="mid-part">
            <ul className="nav-links">
            {/* Options on the right */}
            <li><a href="/">Sustainability</a></li>
            <li><a href="/">Fast Fashion</a></li>
            <li><a href="/">Sneaker</a></li>
            <li><a href="/">Luxury</a></li>
            </ul>
        </div>
        <div className="right-part">
            <button className='nav-subscribe-btn'>Subscribe</button>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
