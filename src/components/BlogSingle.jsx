import React from 'react'

const BlogSingle = ({ key, title, images, content }) => {
  return (
    <div>
      <div className='single-blog-title'>{title}</div>
      <div className="single-blog-content">{content}</div>
      <div className='single-blog-img-container'>
        {/* {console.log(images.length)} */}
        {images && images.map((image, index) => (
            console.log(image.length),
          <img key={index} src={image} alt={`Blog ${title} - Image ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default BlogSingle