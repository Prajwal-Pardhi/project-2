import React from "react";
import { useParams } from "react-router-dom";

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
        <div className="blog-view-content">
          <div>{blogData[heading].content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
