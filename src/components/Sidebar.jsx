import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import '../Sidebar.css';
import {
    FaYoutube,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";

const Sidebar = ({ showMenu, setShowMenu }) => {
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`side-window ${showMenu ? 'show-sidebar' : ''}`}>
      
      <div className="close-button" onClick={handleClick}>
        <RxCross2 className="text-white" />
        <p className="text-lit">LIT</p>
      </div>
      <ul>
        <li>
          <Link
            to="/about_us"
            style={{ textDecoration: "none", color: "white" }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact_us"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Newsletter
          </Link>
        </li>
      </ul>

      <div className="title-and-icons" style={{transform: "scale(0.5)",}}>
          <div className="blog-social-title">Luxury In Taste - LIT</div>
          <div className="social-icons">
            <div className="icons-in-sidebar">
            <div className="single-icon">
              <Link to="https://www.youtube.com" target="_blank">
                <FaYoutube style={{ fontSize: "30px", color: "red" }} />
              </Link>
            </div>
            <div className="single-icon">
              <Link to="#" target="_blank">
                <FaFacebook style={{ fontSize: "30px", color: "#3b5998" }} />
              </Link>
            </div>
            <div className="single-icon">
              <Link
                to="https://www.instagram.com/luxuryintaste?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <FaInstagram style={{ fontSize: "30px", color: "#C13584" }} />
              </Link>
            </div>
            <div className="single-icon">
              <Link to="#" target="_blank">
                <FaTwitter style={{ fontSize: "30px", color: "#1DA1F2" }} />
              </Link>
            </div>
            <div className="single-icon">
              <Link
                to="https://www.linkedin.com/company/luxury-in-taste-lit/"
                target="_blank"
              >
                <FaLinkedin style={{ fontSize: "30px", color: "#0077B5" }} />
              </Link>
            </div>
          </div>
          </div>
        </div>

    </div>
  );
};

export default Sidebar;
