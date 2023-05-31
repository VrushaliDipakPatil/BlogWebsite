import React, { useState } from "react";
import "./Createblog.css";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateBlog = () => {

  const [title, setTitle] = useState("");
  const[unique, setUnique]=useState(true)
  const [authorName, setAuthorName] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");


  const defaultImg = "https://y6h4c7e5.rocketcdn.me/wp-content/uploads/2019/03/personal-blog-1024x538.jpg"

  const blogPost = localStorage.getItem('blogPosts')
  const parsedItem = JSON.parse(blogPost) || [];

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
    istitleUnique(title)

    if(unique === true){
    const submittedData =
      {
        id: parsedItem.id + 1 || 1,
        title: title,
        authorName: authorName,
        topic: topic,
        content: content,
        backgroundImage: image || defaultImg,
      } 
if(submittedData.title === "" || submittedData.authorName === "" || submittedData.topic === "" || submittedData.content === " "){
  toast.error("Please fill Required fields!!")
}else{
  parsedItem.push(submittedData)
  localStorage.setItem('blogPosts', JSON.stringify(parsedItem))
  toast.success(`${submittedData.title} is added Successfully`);
  setTitle('')
  setAuthorName('')
  setTopic('')
  setContent('')
  setImage('')
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
              value={ title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorName">* Author Name:</label>
            <input
              type="text"
              id="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">* Topic:</label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">* Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
