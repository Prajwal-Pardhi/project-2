import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ heading, description }) => {
  return (
    <div className="blog-card-main">
      <div className="blog-decoration"></div>
      <h2 className="blog-heading">{heading}</h2>
      <p className="blog-desc">{description}</p>

      <Link to={`/blog/${heading}`} className="blog-details-btn">
        <button className="blog-details-btn">Details</button>
      </Link>
    </div>
  );
};

export default BlogCard;
