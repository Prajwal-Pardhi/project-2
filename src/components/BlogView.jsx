import React from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Index_1 from "./BlogPages/Index_1";
import Index_2 from "./BlogPages/Index_2";
import Index_3 from "./BlogPages/Index_3";
import Index_4 from "./BlogPages/Index_4";

const BlogView = () => {
  const { heading } = useParams();
  //Dummy data for blog content
  const dummmmy_data = (
    <div>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolores, tenetur? Rerum
        perferendis placeat cumque voluptatibus ad reiciendis sunt libero
        cupiditate, labore repellat, similique cum facilis dignissimos officiis
        unde facere. Sint perspiciatis aut beatae corporis, repellat quibusdam
        ad voluptate inventore, animi doloremque eligendi! Eligendi distinctio
        quod, similique recusandae iste deleniti iure placeat architecto cumque
        possimus quibusdam minima nulla porro id vel cum blanditiis! Odit quia
        optio a officia quas accusamus veniam quae illum sapiente cupiditate,
        facilis eveniet aut? Dolorem sequi, sint, assumenda vero molestias
        repellat libero tempora id sunt non veniam fuga? Dicta voluptate nam
        ipsa facere a dignissimos, quam dolore.
      </p>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolores, tenetur? Rerum
        perferendis placeat cumque voluptatibus ad reiciendis sunt libero
        cupiditate, labore repellat, similique cum facilis dignissimos officiis
        unde facere. Sint perspiciatis aut beatae corporis, repellat quibusdam
        ad voluptate inventore, animi doloremque eligendi! Eligendi distinctio
        quod, similique recusandae iste deleniti iure placeat architecto cumque
        possimus quibusdam minima nulla porro id vel cum blanditiis! Odit quia
        optio a officia quas accusamus veniam quae illum sapiente cupiditate,
        facilis eveniet aut? Dolorem sequi, sint, assumenda vero molestias
        repellat libero tempora id sunt non veniam fuga? Dicta voluptate nam
        ipsa facere a dignissimos, quam dolore.
      </p>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolores, tenetur? Rerum
        perferendis placeat cumque voluptatibus ad reiciendis sunt libero
        cupiditate, labore repellat, similique cum facilis dignissimos officiis
        unde facere. Sint perspiciatis aut beatae corporis, repellat quibusdam
        ad voluptate inventore, animi doloremque eligendi! Eligendi distinctio
        quod, similique recusandae iste deleniti iure placeat architecto cumque
        possimus quibusdam minima nulla porro id vel cum blanditiis! Odit quia
        optio a officia quas accusamus veniam quae illum sapiente cupiditate,
        facilis eveniet aut? Dolorem sequi, sint, assumenda vero molestias
        repellat libero tempora id sunt non veniam fuga? Dicta voluptate nam
        ipsa facere a dignissimos, quam dolore.
      </p>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolores, tenetur? Rerum
        perferendis placeat cumque voluptatibus ad reiciendis sunt libero
        cupiditate, labore repellat, similique cum facilis dignissimos officiis
        unde facere. Sint perspiciatis aut beatae corporis, repellat quibusdam
        ad voluptate inventore, animi doloremque eligendi! Eligendi distinctio
        quod, similique recusandae iste deleniti iure placeat architecto cumque
        possimus quibusdam minima nulla porro id vel cum blanditiis! Odit quia
        optio a officia quas accusamus veniam quae illum sapiente cupiditate,
        facilis eveniet aut? Dolorem sequi, sint, assumenda vero molestias
        repellat libero tempora id sunt non veniam fuga? Dicta voluptate nam
        ipsa facere a dignissimos, quam dolore.
      </p>
      <p>
        &nbsp;&nbsp;This is the full content of the blog post. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolores, tenetur? Rerum
        perferendis placeat cumque voluptatibus ad reiciendis sunt libero
        cupiditate, labore repellat, similique cum facilis dignissimos officiis
        unde facere. Sint perspiciatis aut beatae corporis, repellat quibusdam
        ad voluptate inventore, animi doloremque eligendi! Eligendi distinctio
        quod, similique recusandae iste deleniti iure placeat architecto cumque
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
      index: 1,
      imgPath: "/newsImgs/sustainability.jpeg",
    },
    "ALL IN LUXURY": {
      content: dummmmy_data,
      index: 2,
      imgPath: "/newsImgs/luxury_fashion.jpeg",
    },
    "WHAT'S FAST IN FASHION": {
      content: dummmmy_data,
      index: 3,
      imgPath: "/newsImgs/fast_fashion.jpeg",
    },
    "WHAT'S HOT IN THE SNEAKER WORLD": {
      content: dummmmy_data,
      index: 4,
      imgPath: "/newsImgs/sneaker.jpeg",
    },
  };
  const index = blogData[heading].index;
  return (
    <>
      <Navbar />
      <div className="blog-view-main-container">
        <div className="blog-view-container">
          <div className="blog-view-heading">{heading}</div>
  
          <div className="blog-view-content">
            <img
              src={blogData[heading].imgPath}
              alt="img"
              className="blog-img1"
            />
            {/* <div>{blogData[heading].content}</div>   */}
            {index === 1 ? <Index_1/> : index === 2 ? <Index_2/> : index === 3 ? <Index_3/> : <Index_4/>}
  
          </div>
          <div className="more-blog-btn-container">
            <Link to="/" style={{ textDecoration: "none" }}>
              <button
                className="more-blog-btn"
                style={{ display: "flex", alignItems: "center" }}
              >
                Discover More Blogs{" "}
                <IoIosArrowForward
                  style={{ fontSize: "15px", marginLeft: "3px", color: "pink" }}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogView;
