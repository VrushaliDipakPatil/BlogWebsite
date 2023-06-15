import React, { useState } from "react";
import "./Createblog.css";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, RichUtils } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';


const CreateBlog = () => {
  const user = localStorage.getItem("bloguser");
  const userparse = JSON.parse(user);
  const username = userparse[0].name;

  const [blog, setBlog] = useState({
    title: "",
    topic: "",
    backgroundImage: "",
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  let name, value;
  const HandleAddBlog = (event) => {
    name = event.target.name;
    value = event.target.value;

    setBlog({ ...blog, [name]: value });
  };

  const defaultImg =
    "https://y6h4c7e5.rocketcdn.me/wp-content/uploads/2019/03/personal-blog-1024x538.jpg";

  const blogPost = localStorage.getItem("blogPosts");
  const parsedItem = JSON.parse(blogPost) ;


  const handleSubmit = (e) => {
    
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const htmlContent = convertToHTML(editorState.getCurrentContent());
      const submittedData = {
        id: parsedItem.length + 1,
        title: blog.title,
        authorName: username,
        topic: blog.topic,
        content: htmlContent,
        backgroundImage: blog.backgroundImage || defaultImg,
      };
      if (
        submittedData.title === "" ||
        submittedData.topic === "" ||
        submittedData.content === ""
      ) {
        toast.error("Please fill Required fields!!");
      } else {
    CreateBlogData(submittedData)
        setBlog({
          title: "",
          topic: "",
          backgroundImage: "",
        })
        setEditorState(EditorState.createEmpty());
      }
  
  };

  async function  CreateBlogData(blogdata){
    await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogdata),
    })
    .then((res) => res.json())
    .then((data) => {
      toast.success(`${data.title} is added Successfully`);
      })
    .catch((err) => {
        console.log(err);
      });
  }



  return (
    <>
      <Navbar />
        
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
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              toolbar={{
                options: ["inline", "blockType", "fontFamily", "list"],
                inline: {
                  options: ["bold", "italic", "underline"],
                },
              }}
              placeholder="Write your blog content..."
            />
          </div>
          <button type="submit">Publish</button>
        </form>
        </div>
    </>
  );
};

export default CreateBlog;
