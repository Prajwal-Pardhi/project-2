import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import SubscribeModal from "./SubscribeModal";
import LoginPage from "./LoginPage";
// import "../Navbar.css"; // Import custom CSS for navbar styling

// import '../Navbar.css'; // Import custom CSS for navbar styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubscribeModal, setOpenSubscribeModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const headings = [
    "THE REALM OF SUSTAINABILITY",
    "WHAT'S FAST IN FASHION",
    "WHAT'S HOT IN THE SNEAKER WORLD",
    "ALL IN LUXURY",
  ];

  function isUserLoggedIn() {
    return !!localStorage.getItem("token");
  }
  function logoutFunc() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <Sidebar showMenu={isMenuOpen} setShowMenu={setIsMenuOpen} />
      <div className="navbar-container">
        <div className="left-part">
          <div className="menu-container" onClick={toggleMenu}>
            <IoMenu className="menu-icon" size={30} color="white" />
          </div>
          <div className="nav-title-name">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              LIT
            </Link>
          </div>
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
          {/* Subscribe nutton------------ */}
          <button
            className="nav-subscribe-btn"
            onClick={() => {
              setOpenSubscribeModal(true);
            }}
          >
            Subscribe
          </button>
          {openSubscribeModal && (
            <SubscribeModal
              openSubscribeModal={openSubscribeModal}
              setOpenSubscribeModal={setOpenSubscribeModal}
            />
          )}

          {/* Login Logout button--------------- */}
          <button className="nav-login-btn">
            <div className="nav-login-btn-content">
              {isUserLoggedIn() ? (
                <button className="nav-login-btn" onClick={logoutFunc}>
                  Logout
                </button>
              ) : (
                <button
                  className="nav-login-btn"
                  onClick={() => {
                    setOpenLoginModal(true);
                  }}
                >
                  <div className="nav-login-btn-content" >
                    <div style={{ whiteSpace: "nowrap" }}>Sign In</div>
                    <CiLogin size={22} />
                  </div>
                </button>
              )}
            </div>
            
          </button>
          {openLoginModal && (
            <LoginPage
              openLoginModal={openLoginModal}
              setOpenLoginModal={setOpenLoginModal}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
