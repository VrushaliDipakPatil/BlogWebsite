import React from 'react';
import "./Blogdetail.css"
import { useLocation, useNavigate } from '../../node_modules/react-router-dom/dist/index';
import Navbar from './Navbar';
import {FaEdit  } from 'react-icons/fa';


const BlogDetail = () => {
    const location = useLocation();
    const { post } = location.state;
const navigate = useNavigate();
const handleBack=()=>{
navigate('/')
}

const user = localStorage.getItem("bloguser");
  const userparse = JSON.parse(user);
  const username = userparse[0].name;

  return (
    <>
    <Navbar/>
    <div className="blog-post">
    <h1><span className='arrow' onClick={handleBack}>&#8592;</span>{post?.title}</h1>
    <p className="author-info">
  By <span className="author-name">{post?.authorName}</span> |{' '}
  <span className="topic">{post?.topic}</span>
  <span className="edit-icon">{post.authorName === username? <FaEdit /> : ""}</span>
</p>
    <div className='blog-item' style={{ backgroundImage: `url(${post?.backgroundImage})` }}></div>
    <div dangerouslySetInnerHTML={{ __html: post?.content }} />
  </div>
  </>
  )
}

export default BlogDetail