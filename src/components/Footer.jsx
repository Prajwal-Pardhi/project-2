import React from "react";
import { Link } from "react-router-dom";
import {
    FaYoutube,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="blog-footer-container">
      <div className="blog-footer">
        <div className="title-and-icons">
          <div className="blog-social-title">Luxury In Taste - LIT</div>
          <div className="social-icons">
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

        <div className="footer-options">
          <div className="single-option">Terms and condition</div>
          <div className="single-option"><Link to="/contact_us" style={{textDecoration:"none", color:"white"}}>Contact</Link></div>
          <div className="single-option">Privacy</div>
          <div className="single-option"><Link to="/" style={{textDecoration:"none", color:"white"}}>Newsletter</Link></div>
          <div className="single-option">Our Team</div>
          <div className="single-option">Careers</div>
          <div className="single-option">Subscribe</div>
          <div className="single-option">Feedback</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
