import React from 'react';
// import './Navbar.css'; // Import custom CSS for navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="logo.jpeg" className="logo">Logo</a>

        {/* Menu button for mobile */}
        <div className="menu-button">
          <div className="menu-bar">About</div>
          <div className="menu-bar">Contact Us</div>
          <div className="menu-bar">Newsletter</div>
        </div>

        {/* Menu options */}
        <ul className="nav-links">
          {/* Options on the right */}
          <li><a href="/">Fashion</a></li>
          <li><a href="/">Sustainability</a></li>
          <li><a href="/">Fast Fashion</a></li>
          <li><a href="/">Sneaker</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
