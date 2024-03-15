import React, { useState, useRef } from "react";
import BlogCard from "./Blogcard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import SubscribeModal from "./SubscribeModal";

const NewsLetter = () => {
  const [email, setEmail] = useState(""); //Email state for email input
  const [submitted, setSubmitted] = useState(false); //Submitted state for email after clicking subscribe button
  const [openModal, setOpenModal] = useState(false); //Modal for subscribe button
  const newsletterRef = useRef(null);

  const scrollToNewsletter = () => {
    newsletterRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here, e.g., sending data to database --------
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <div className="head-container">
        <div className="head-icon">
          <img src="logo.jpeg" alt="img" />
        </div>
        <div className="head-text">
          <div className="blog-decoration ml-10"></div>
          <div className="head-title-text">
            WELCOME TO LUXURY <br />
            IN TASTE - LIT
          </div>
          <div className="head-title-desc">
            LIT, A pioneering fashion-gaming platform. Play our game, spot fast
            fashion vs. luxury without logos. Explore discounted luxury,
            sustainable goods on our Marketplace. Enhance your digital persona
            with the Avatar Store, featuring digital clothes from top brands.
            Shop effortlessly with image recognition, ensuring direct product
            links for any upload. LIT, where your unique expression knows no
            boundaries.
          </div>
          <div className="subscribe-block-container" >
            <div className="subscribe-block">
              <p className="tagline">Stay updated with our latest news!</p>
              <button className="subscribe-button" onClick={scrollToNewsletter}>CLICK HERE TO SUBSCRIBE</button>
              {/* {openModal && (<SubscribeModal openModal={openModal} setOpenModal={setOpenModal} />)} */}
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="blog-grid-container">
        <BlogCard
          index={1}
          heading="THE REALM OF SUSTAINABILITY"
          imgPath = "/newsImgs/sustainability.jpeg"
          description="Discover new sustainable brands reshaping the market, delve into the latest news on eco-conscious goods, and explore much more in the realme of sustainable fashion."
        />
        <BlogCard
          index={2}
          heading="ALL IN LUXURY"
          imgPath = "/newsImgs/luxury_fashion.jpeg"
          description="Indulge in the opulence of high-end fashion, uncovering the latest trends, exclusive releases, and the epitome of luxury in every stitch and design"
        />
        <BlogCard
          index={3}
          heading="WHAT'S FAST IN FASHION"
          imgPath = "/newsImgs/fast_fashion.jpeg"
          description="Stay ahead with real-time insights into the fast-paced world of fashion. Discover rapid trends, quick releases, and the latest buzz in the ever-evolving fashion landscape."
        />
        <BlogCard
          index={4}
          heading="WHAT'S HOT IN THE SNEAKER WORLD"
          imgPath = "/newsImgs/sneaker.jpeg"
          description="Step into the sneaker culture with a spotlight on the latest kicks, collaborations, and must-have styles. Stay informed on the pulse of the sneaker world."
        />
        {/* Add more instances of BlogCard component as needed */}
      </div>
      {/* <div className="blog-container"></div> */}
      <div className="newsletter-container" ref={newsletterRef}>
        <div className="newsletter-content">
          <p style={{ color: "#7338A0", fontWeight: "bold" }}>
            Subscribe to LIT
          </p>
          <p >to receive all about fashion</p>
          {/* <h4>Join the fashion-gaming community and get early updates</h4> */}
          {submitted ? (
            <h1>Thank you for subscribing!</h1>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button type="submit">Subscribe</button>
              
            </form>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default NewsLetter;
