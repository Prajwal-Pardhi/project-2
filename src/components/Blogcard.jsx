import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogCard = ({ heading, imgPath, description }) => {
  return (
    <div className="blog-card-main">
      <div className="blog-decoration"></div>
      <h2 className="blog-heading">{heading}</h2>
      <div className="blog-img-container"><img className="blog-card-img" src={imgPath} alt="img" /></div>
      <p className="blog-desc">{description}</p>

      <Link to={`/blog/${heading}`} style={{textDecoration:"none"}} >
        <button className="blog-details-btn" style={{display:"flex", alignItems:"center"}}>Details <IoIosArrowForward style={{fontSize:"15px", marginLeft:"3px", color:"#CC00FF"}}/></button>
      </Link>
    </div>
  );
};

export default BlogCard;
