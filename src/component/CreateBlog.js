import React, { useState } from "react";
import "./Createblog.css";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blogPostsdata from "./blogdata";

const CreateBlog = () => {
  const [checked, setChecked] = useState("false");

  const [blog, setBlog] = useState({
    title: "",
    authorName: "",
    topic: "",
    backgroundImage: "",
    content: " ",
  });

  let name, value;
  const HandleAddBlog = (event) => {
    name = event.target.name;
    value = event.target.value;

    setBlog({ ...blog, [name]: value });
  };

  const defaultImg =
    "https://y6h4c7e5.rocketcdn.me/wp-content/uploads/2019/03/personal-blog-1024x538.jpg";

  const blogPost = localStorage.getItem("blogPosts");
  const parsedItem = JSON.parse(blogPost) || blogPostsdata;

  const [isOpen, setIsOpen] = useState(false);

  const openModelBox = () => {
    setIsOpen(true);
  };

  const closeModelBox = () => {
    setIsOpen(false);
  };

const[data, setData]=useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checked == "true") {
      e.preventDefault();
      const submittedData = {
        id: parsedItem.length + 1,
        title: blog.title,
        authorName: blog.authorName,
        topic: blog.topic,
        content: blog.content,
        backgroundImage: blog.backgroundImage || defaultImg,
      };
      if (
        submittedData.title === "" ||
        submittedData.authorName === "" ||
        submittedData.topic === "" ||
        submittedData.content === " "
      ) {
        toast.error("Please fill Required fields!!");
      } else {
        openModelBox();
        setData(submittedData);
      }
    } else {
      {
        toast.error("Please check the checkbox first !!");
      }
    }
  };

  function AddBlog(){
    console.log(data)
      parsedItem.push(data)
        localStorage.setItem('blogPosts', JSON.stringify(parsedItem))
        toast.success(`${data.title} is added Successfully`);
        setBlog({
          title: "",
          authorName: "",
          topic: "",
          backgroundImage: "",
          content:" "
        })
  }

  const handleCheckBox = (e) => {
    if (e.target.checked == "true") {
      setChecked("false");
    } else {
      setChecked("true");
    }
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
              <div className={isOpen ? 'blur-background' : ''}>
      <div className="create-blog">
        <h2>Create a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">* Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={blog.title}
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
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              onChange={(e) => {
                handleCheckBox(e);
              }}
            />
            <label>Publish</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
      {isOpen && (
        <div className="model-box">
          <h2>Are you sure you want to publish??</h2>
          <div style={{ textAlign: "center", padding: "15px" }}>
            <span>
              <input type="radio" value="yes" onClick={AddBlog} />
              
              <label>Yes</label>
            </span>
            <span>
              <input type="radio" value="no" onClick={closeModelBox} />
              <label>No</label>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateBlog;
