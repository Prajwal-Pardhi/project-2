import React, { useState } from "react";
import BlogCard from "./Blogcard";
import Navbar from "./Navbar";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here, e.g., sending data to server
    setSubmitted(true);
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
        </div>
      </div>
      <div className="subscribe-block-container" >
        <div className="subscribe-block" onClick={<Link to={"/"}></Link>}>
          <p className="tagline">Stay updated with our latest news!</p>
          <button className="subscribe-button">CLICK HERE TO SUBSCRIBE</button>
        </div>
      </div>
      <div className="blog-grid-container">
        <BlogCard
          heading="THE REALM OF SUSTAINABILITY"
          imgPath = "/newsImgs/sustainability.jpeg"
          description="Discover new sustainable brands reshaping the market, delve into the latest news on eco-conscious goods, and explore much more in the realme of sustainable fashion."
        />
        <BlogCard
          heading="ALL IN LUXURY"
          imgPath = "/newsImgs/luxury_fashion.jpeg"
          description="Indulge in the opulence of high-end fashion, uncovering the latest trends, exclusive releases, and the opitome of luxury in every stitch and design"
        />
        <BlogCard
          heading="WHATS FAST IN FASHION"
          imgPath = "/newsImgs/fast_fashion.jpeg"
          description="Stay ahead with real-time insights into the fast-paced world of fashion. Discover rapid trends, quick releases, and the latest buzz in the ever-evolving fashion landscape."
        />
        <BlogCard
          heading="WHAT'S HOT IN THE SNEAKER WORLD"
          imgPath = "/newsImgs/sneaker.jpeg"
          description="Step into the sneaker culture with a spotlight on the latest kicks, collaborations, and must-have styles. Stay informed on the pulse of the sneaker world."
        />
        {/* Add more instances of BlogCard component as needed */}
      </div>
      {/* <div className="blog-container"></div> */}
      <div className="newsletter-container">
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
      <div className="blog-footer-container blog-footer-container2">
      <div className="blog-footer">
          <div className="title-and-icons">
            <div className="blog-social-title">Luxury In Taste - LIT</div>
            <div className="social-icons">
              <div className="single-icon"><Link to='https://www.youtube.com' target="_blank"><FaYoutube style={{ fontSize: "30px", color: "red" }} /></Link></div>
              <div className="single-icon"><Link to='#' target="_blank"><FaFacebook style={{ fontSize: "30px", color: "#3b5998" }} /></Link></div>
              <div className="single-icon"><Link to='https://www.instagram.com/luxuryintaste?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank"><FaInstagram style={{ fontSize: "30px", color: "#C13584" }} /></Link></div>
              <div className="single-icon"><Link to='#' target="_blank"><FaTwitter style={{ fontSize: "30px", color: "#1DA1F2" }} /></Link></div>
              <div className="single-icon"><Link to='https://www.linkedin.com/company/luxury-in-taste-lit/' target="_blank"><FaLinkedin style={{ fontSize: "30px", color: "#0077B5" }} /></Link></div>
            </div>
          </div>     

          <div className="footer-options">
            <div className="single-option" >Terms and condition</div>
            <div className="single-option">Contact</div>
            <div className="single-option">Privacy</div>
            <div className="single-option">Newsletter</div>
            <div className="single-option">Our Team</div>
            <div className="single-option">Careers</div>
            <div className="single-option">Subscribe</div>
            <div className="single-option">Feedback</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NewsLetter;
