import React from "react";
import { useParams } from "react-router-dom";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogView = () => {
  const { heading } = useParams();

  //Dummy data for blog content
  const dummmmy_data = (
    <div>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolores, tenetur? Rerum perferendis
        placeat cumque voluptatibus ad reiciendis sunt libero cupiditate, labore
        repellat, similique cum facilis dignissimos officiis unde facere. Sint
        perspiciatis aut beatae corporis, repellat quibusdam ad voluptate
        inventore, animi doloremque eligendi! Eligendi distinctio quod,
        similique recusandae iste deleniti iure placeat architecto cumque
        possimus quibusdam minima nulla porro id vel cum blanditiis! Odit quia
        optio a officia quas accusamus veniam quae illum sapiente cupiditate,
        facilis eveniet aut? Dolorem sequi, sint, assumenda vero molestias
        repellat libero tempora id sunt non veniam fuga? Dicta voluptate nam
        ipsa facere a dignissimos, quam dolore.
      </p>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolores, tenetur? Rerum perferendis
        placeat cumque voluptatibus ad reiciendis sunt libero cupiditate, labore
        repellat, similique cum facilis dignissimos officiis unde facere. Sint
        perspiciatis aut beatae corporis, repellat quibusdam ad voluptate
        inventore, animi doloremque eligendi! Eligendi distinctio quod,
        similique recusandae iste deleniti iure placeat architecto cumque
        possimus quibusdam minima nulla porro id vel cum blanditiis! Odit quia
        optio a officia quas accusamus veniam quae illum sapiente cupiditate,
        facilis eveniet aut? Dolorem sequi, sint, assumenda vero molestias
        repellat libero tempora id sunt non veniam fuga? Dicta voluptate nam
        ipsa facere a dignissimos, quam dolore.
      </p>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolores, tenetur? Rerum perferendis
        placeat cumque voluptatibus ad reiciendis sunt libero cupiditate, labore
        repellat, similique cum facilis dignissimos officiis unde facere. Sint
        perspiciatis aut beatae corporis, repellat quibusdam ad voluptate
        inventore, animi doloremque eligendi! Eligendi distinctio quod,
        similique recusandae iste deleniti iure placeat architecto cumque
        possimus quibusdam minima nulla porro id vel cum blanditiis! Odit quia
        optio a officia quas accusamus veniam quae illum sapiente cupiditate,
        facilis eveniet aut? Dolorem sequi, sint, assumenda vero molestias
        repellat libero tempora id sunt non veniam fuga? Dicta voluptate nam
        ipsa facere a dignissimos, quam dolore.
      </p>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolores, tenetur? Rerum perferendis
        placeat cumque voluptatibus ad reiciendis sunt libero cupiditate, labore
        repellat, similique cum facilis dignissimos officiis unde facere. Sint
        perspiciatis aut beatae corporis, repellat quibusdam ad voluptate
        inventore, animi doloremque eligendi! Eligendi distinctio quod,
        similique recusandae iste deleniti iure placeat architecto cumque
        possimus quibusdam minima nulla porro id vel cum blanditiis! Odit quia
        optio a officia quas accusamus veniam quae illum sapiente cupiditate,
        facilis eveniet aut? Dolorem sequi, sint, assumenda vero molestias
        repellat libero tempora id sunt non veniam fuga? Dicta voluptate nam
        ipsa facere a dignissimos, quam dolore.
      </p>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolores, tenetur? Rerum perferendis
        placeat cumque voluptatibus ad reiciendis sunt libero cupiditate, labore
        repellat, similique cum facilis dignissimos officiis unde facere. Sint
        perspiciatis aut beatae corporis, repellat quibusdam ad voluptate
        inventore, animi doloremque eligendi! Eligendi distinctio quod,
        similique recusandae iste deleniti iure placeat architecto cumque
        possimus quibusdam minima nulla porro id vel cum blanditiis! Odit quia
        optio a officia quas accusamus veniam quae illum sapiente cupiditate,
        facilis eveniet aut? Dolorem sequi, sint, assumenda vero molestias
        repellat libero tempora id sunt non veniam fuga? Dicta voluptate nam
        ipsa facere a dignissimos, quam dolore.
      </p>
    </div>
  );

  //Here content will come from database for each blog post
  const blogData = {
    "THE REALM OF SUSTAINABILITY": {
      content: dummmmy_data,
    },
    "ALL IN LUXURY": {
      content: dummmmy_data,
    },
    "WHATS FAST IN FASHION": {
      content: dummmmy_data,
    },
    "WHAT'S HOT IN THE SNEAKER WORLD": {
      content: dummmmy_data,
    },
  };
  return (
    <div className="blog-view-main-container">
      <div className="blog-view-container">
        <div className="blog-view-heading">{heading}</div>
        <img src="/blog_img.jpg" alt="img" className="blog-img1" />
        <div className="blog-view-content">
          <div>{blogData[heading].content}</div>
        </div>
        <div className="more-blog-btn-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="more-blog-btn" style={{ display: "flex", alignItems: "center" }}>
              Discover More Blogs <IoIosArrowForward style={{ fontSize: "15px", marginLeft: "3px", color: "pink" }} />
            </button>
          </Link>
        </div>
      </div>
        
      <div className="blog-footer-container">
      <div className="blog-footer">
          <div className="title-and-icons">
            <div className="blog-social-title">Luxury In Taste - LIT</div>
            <div className="social-icons">
              <div className="single-icon"><Link to='https://www.youtube.com'><FaYoutube style={{ fontSize: "30px", color: "red" }} /></Link></div>
              <div className="single-icon"><Link to='#'><FaFacebook style={{ fontSize: "30px", color: "#3b5998" }} /></Link></div>
              <div className="single-icon"><Link to='#'><FaInstagram style={{ fontSize: "30px", color: "#C13584" }} /></Link></div>
              <div className="single-icon"><Link to='#'><FaTwitter style={{ fontSize: "30px", color: "#1DA1F2" }} /></Link></div>
              <div className="single-icon"><Link to='#'><FaLinkedin style={{ fontSize: "30px", color: "#0077B5" }} /></Link></div>
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
      
    </div>
  );
};

export default BlogView;
