import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import SubscribeModal from "./SubscribeModal";

// import '../Navbar.css'; // Import custom CSS for navbar styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const headings = [
    "THE REALM OF SUSTAINABILITY",
    "WHAT'S FAST IN FASHION",
    "WHAT'S HOT IN THE SNEAKER WORLD",
    "ALL IN LUXURY",
  ];
  return (
    <nav className="navbar">
        <Sidebar showMenu={isMenuOpen} setShowMenu={setIsMenuOpen} />
      <div className="navbar-container">
        <div className="left-part">

          <div className="menu-container" onClick={toggleMenu}>
            <IoMenu className="menu-icon" size={30} />
          </div>
          <div className="nav-title-name"><Link to={'/'} style={{textDecoration:'none', color:'white'}}>LIT</Link></div>
        </div>
        <div className="mid-part">
          <ul className="nav-links">
            {/* Options on the right */}
            <li>
              <Link to={`/blog/${headings[0]}`}>Eco-Fashion</Link>
            </li>
            <li>
              <Link to={`/blog/${headings[1]}`}>Fast Fashion</Link>
            </li>
            <li>
              <Link to={`/blog/${headings[2]}`}>Sneaker Market</Link>
            </li>
            <li>
              <Link to={`/blog/${headings[3]}`}>Haute Couture</Link>
            </li>
          </ul>
        </div>
        <div className="right-part">
          <button className="nav-subscribe-btn" onClick={()=>{
            setOpenModal(true);
          }}>Subscribe</button>
          {openModal && (<SubscribeModal openModal={openModal} setOpenModal={setOpenModal} />)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
