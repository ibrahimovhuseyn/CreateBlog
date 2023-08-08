import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({
    title,
    description,
    img_url,
    blog_id
}) {
    return (
        <div className='blog-card mb-4'>
            <div className="img-wrapper">
                <img src={img_url} alt="image" />
            </div>
            <div className="content">
                <h1>{title}</h1>
                <p>{description}</p>
                <Link
                    to={`/blog/${blog_id}`}
                    className='btn btn-outline-warning'
                >
                    Continue Reading
                </Link>
            </div>
        </div>
    )
}

export default BlogCard