import React, { useState } from "react";
import "./Blogpage.css";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import blogPosts from "../blogdata";

const Blogpage = () => {
  const navigate = useNavigate();

  const handleClick = (post) => {
    navigate("/blogdetail", { state: { post } });
  };
  const blogPost = localStorage.getItem("blogPosts");
  const parsedItem = JSON.parse(blogPost);

  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="blog-page">
      <div className="top-heading">
        <h1>Blog Posts</h1>
        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            placeholder="Search by topic or Author"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <ul className="blog-list">
        {parsedItem
          .filter((post) => {
            if (searchInput === "") {
              return post;
            } else if (
              post.topic.toLowerCase().includes(searchInput.toLowerCase()) ||
              post.authorName.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return post;
            }
          })
          .slice()
          .reverse()
          .map((post) => (
            <li
              key={post.id}
              className="blog-item"
              style={{ backgroundImage: `url(${post.backgroundImage})` }}
            >
              <div className="blog-content">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-info">
                  <span className="author-name">{post.authorName}</span> |{" "}
                  <span className="topic">{post.topic}</span>
                </p>
                <p className="blog-text">{post.content.substring(0, 300)}</p>
                <p className="read-more-link" onClick={() => handleClick(post)}>
                  Read More
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Blogpage;
