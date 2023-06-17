import React, { useState } from 'react';
import "./Blogdetail.css"
import { useLocation, useNavigate } from '../../node_modules/react-router-dom/dist/index';
import Navbar from './Navbar';
import {FaEdit  } from 'react-icons/fa';
import { ContentState, EditorState, convertFromHTML } from 'draft-js';
import { Editor} from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import { ToastContainer, toast } from "react-toastify";

const BlogDetail = () => {
    const location = useLocation();
    const { post } = location.state;
    console.log(post)
const navigate = useNavigate();
const handleBack=()=>{
navigate('/')
}



const user = localStorage.getItem("bloguser");
  const userparse = JSON.parse(user);
  const username = userparse.authorName;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post?.title);
  const [editedContent, setEditedContent] = useState(
    createEditorStateFromHTML(post?.content)
  );

  function createEditorStateFromHTML(html) {
    const blocksFromHTML = convertFromHTML(html);
    const contentState = ContentState.createFromBlockArray(
      blocksFromHTML?.contentBlocks,
      blocksFromHTML.entityMap
    );
    return EditorState.createWithContent(contentState);
  }

  const handleEditTitle = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleEditContent = (event) => {
    setEditedContent(event.target.value);
  };



  const handleSaveChanges = () => {
    const htmlContent = convertToHTML(editedContent.getCurrentContent());
    const submittedData = {
      _id : post?._id,
      title: editedTitle,
      authorName: username,
      topic: post?.topic,
      content: htmlContent,
      backgroundImage: post?.backgroundImage,
    };
    if (
      submittedData.title === "" ||
      submittedData.content === ""
    ) {
      toast.error("Please fill Required fields!!");
    }else{
      updateBlog(submittedData)
    }
  };

  async function  updateBlog(blogdata){
    await fetch(`https://blog-website-73p2.onrender.com/api/blogs/${blogdata._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogdata),
    })
    .then((res) => res.json())
    .then((data) => {
      toast.success(`${data.title} is updated Successfully`);
      })
    .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
    <Navbar/>
    <div className="blog-post">
      <h1>
        <span className='arrow' onClick={handleBack}>&#8592;</span>
        {isEditing ? (
        <span
          contentEditable="true"
          onBlur={(event) => setEditedTitle(event.target.textContent)}
          style={{ outline: 'none', border: 'none' }}
        >
          {editedTitle}
        </span>
      ) : (
        <span>{editedTitle}</span>
      )}
      </h1>
      <p className="author-info">
        By <span className="author-name">{post?.authorName}</span> |{' '}
        <span className="topic">{post?.topic}</span>
        <span className="edit-icon">
          {post.authorName === username && !isEditing ? (
            <FaEdit onClick={() => setIsEditing(true)} />
          ) : (
            ''
          )}
        </span>
      </p>
      <div
        className="blog-item"
        style={{ backgroundImage: `url(${post?.backgroundImage})` }}
      ></div>
      <div>
        {isEditing ? (
          <Editor editorState={editedContent} onEditorStateChange={setEditedContent} />
        ) : (
          <Editor editorState={editedContent} readOnly toolbarHidden />
        )}
      </div>
      {isEditing && (
        <button onClick={handleSaveChanges}>Save Changes</button>
      )}
    </div>
  </>
  )
}

export default BlogDetail