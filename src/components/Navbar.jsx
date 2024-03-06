import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
// import './Navbar.css'; // Import custom CSS for navbar styling

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
                setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

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
                {/* <button className="menu-button" onClick={toggleMenu}>
                    <IoMenu />
                </button> */}

                {/* Side window */}
                {isMenuOpen && (
                    <div className="side-window">
                    <ul>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Newsletter</li>
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
