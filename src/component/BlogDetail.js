import React from 'react';
import "./Blogdetail.css"
import { useLocation, useNavigate } from '../../node_modules/react-router-dom/dist/index';
import Navbar from './Navbar';


const BlogDetail = () => {
    const location = useLocation();
    const { post } = location.state;
const navigate = useNavigate();
const handleBack=()=>{
navigate('/')
}


  return (
    <>
    <Navbar/>
    <div className="blog-post">
    <h1><span className='arrow' onClick={handleBack}>&#8592;</span>{post?.title}</h1>
    <p className="author-info">
      By <span className="author-name">{post?.authorName}</span> |{' '}
      <span className="topic">{post?.topic}</span>
    </p>
    <div className='blog-item' style={{ backgroundImage: `url(${post?.backgroundImage})` }}>
    <p className="blogcontent" >{post?.content}</p>
    </div>
  </div>
  </>
  )
}

export default BlogDetail