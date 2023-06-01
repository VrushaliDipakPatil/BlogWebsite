import React, { useState } from "react";
import "./Createblog.css";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import blogPostsdata from "./blogdata";

const CreateBlog = () => {

  const[unique, setUnique]=useState(true)
 
  const [blog, setBlog] = useState({
    title: "",
    authorName: "",
    topic: "",
    backgroundImage: "",
    content:" "
  });

  let name, value;
  const HandleAddBlog = (event) => {
    name = event.target.name;
    value = event.target.value;

    setBlog({ ...blog, [name]: value });
  }

  const defaultImg = "https://y6h4c7e5.rocketcdn.me/wp-content/uploads/2019/03/personal-blog-1024x538.jpg"

  const blogPost = localStorage.getItem('blogPosts')
  const parsedItem = JSON.parse(blogPost) || blogPostsdata;

 const istitleUnique=(inputTitle)=>{
  parsedItem
  .filter((post) => {
  if (
      post.title.toLowerCase().includes(inputTitle.toLowerCase()) 
    ){
      toast.error("Blog Title must be Unique")
     setUnique(false);
    }else{
      setUnique(false);
    }
  })
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    istitleUnique(blog.title)

    if(unique === true){
    const submittedData =
      {
        id: parsedItem.length + 1 ,
        title: blog.title,
        authorName: blog.authorName,
        topic: blog.topic,
        content: blog.content,
        backgroundImage: blog.backgroundImage || defaultImg,
      } 
if(submittedData.title === "" || submittedData.authorName === "" || submittedData.topic === "" || submittedData.content === " "){
  toast.error("Please fill Required fields!!")
}else{
  parsedItem.push(submittedData)
  localStorage.setItem('blogPosts', JSON.stringify(parsedItem))
  toast.success(`${submittedData.title} is added Successfully`);
  setBlog({
    title: "",
    authorName: "",
    topic: "",
    backgroundImage: "",
    content:" "
  })
}}

  };



  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="create-blog" >
        <h2>Create a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">* Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={ blog.title}
              onChange={HandleAddBlog}
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorName">* Author Name:</label>
            <input
              type="text"
              name="authorName"
              id="authorName"
              value={blog.authorName}
              onChange={HandleAddBlog}
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">* Topic:</label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={blog.topic}
              onChange={HandleAddBlog}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="backgroundImage"
              value={blog.backgroundImage}
              onChange={HandleAddBlog}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">* Content:</label>
            <textarea
              id="content"
              name="content"
              value={blog.content}
              onChange={HandleAddBlog}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
