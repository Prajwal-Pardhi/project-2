import React, { useState } from "react";
// import './NewsLetter.css';
import BlogCard from "./Blogcard";

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
      <div className="head-container">
        <div className="head-icon">
          <img src="logo.jpeg" alt="img" />
        </div>
        <div className="head-text">
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
            links for any upload. LIT, where your unique expression knows no boundaries.
          </div>
        </div>
      </div>
      <div className="blog-grid-container">
        <BlogCard
          heading="THE REALM OF SUSTAINABILITY"
          description="Discover new sustainable brands reshaping the market, delve into the latest news on eco-conscious goods, and explore much more in the realme of sustainable fashion."
        />
        <BlogCard
          heading="ALL IN LUXURY"
          description="Indulge in the opulence of high-end fashion, uncovering the latest trends, exclusive releases, and the opitome of luxury in every stitch and design"
        />
        <BlogCard
          heading="WHATS FAST IN FASHION"
          description="Stay ahead with real-time insights into the fast-paced world of fashion. Discover rapid trends, quick releases, and the latest buzz in the ever-evolving fashion landscape."
        />
        <BlogCard
          heading="WHAT'S HOT IN THE SNEAKER WORLD"
          description="Step into the sneaker culture with a spotlight on the latest kicks, collaborations, and must-have styles. Stay informed on the pulse of the sneaker world."
        />
        {/* Add more instances of BlogCard component as needed */}
      </div>
      <div className="blog-container"></div>
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h1 style={{ color: "yellow", fontWeight:"bold"}}>Subscribe to LIT</h1>
          <h1>to receive all about fashion</h1>
          <h4>Join the fashion-gaming community and get early updates</h4>
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
    </>
  );
};

export default NewsLetter;
