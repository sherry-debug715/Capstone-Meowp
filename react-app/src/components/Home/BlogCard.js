import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function BlogCard({src, alt, title, blogUrl}) {
    return (
        <>
            <div id="blog-card-container">
                <div className="image-container">
                    <img className="blog-img" src={src} alt={alt} />
                </div>
                <div className="blog-title-link">
                    <div><p className="blog-title">{title}</p></div>
                    <div className="blog-link-container">
                        <a id="blog-link" href={blogUrl}>
                            Read article
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard
