import React from "react";
import { MdLocationCity, MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
        <Navbar />
      <div className="contact-body" >
        <div className="contact-heading-banner">
          <p>Contact Us</p>
        </div>
        <div className="contact-content-block" style={{backgroundColor: "inherit"}}>
          <div className="contact-block-heading">
            <p>Luxury In Taste</p>
          </div>
          <div className="contact-left-block-content">
            <p>
              <MdLocationCity /> Address: 123, XYZ Street, Bengaluru, Karnataka,
              123456
              <span className="email-id"></span>
            </p>
            <p>
              <FiPhoneCall /> Phone: +91 1234567890
            </p>
            <p>
              <MdOutlineMail /> <Link to="mailto:xyz_lit@gmail.com" style={{textDecoration:"none", color:"white"}}>Email : xyz_lit@gmail.com</Link>
            </p>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default ContactUs;
