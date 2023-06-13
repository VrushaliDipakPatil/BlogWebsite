import React, { useState } from "react";
import "./Blogpage.css";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import blogPostsdata from "./blogdata";

const Blogpage = () => {
  const navigate = useNavigate();

  const blogpostdata = blogPostsdata;

  const handleClick = (post) => {
    navigate("/blogdetail", { state: { post } });
  };

  const handleHome = (post) => {
    navigate("/");
  };
  const blogPost = localStorage.getItem("blogPosts");
  const user = localStorage.getItem("bloguser");
  const userparse = JSON.parse(user);
  const username = userparse[0].name;
  const parsedItem = JSON.parse(blogPost) || blogpostdata;

  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleDelete = (selectedpost) => {
    const updatedPosts = parsedItem.filter(
      (post) => post.title !== selectedpost.title
    );
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    handleHome();
  };

  return (
    <div className="blog-page">
      <div className="top-heading">
        <h1>Blog Posts</h1>
        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            className="search-input"
            placeholder="Search by Topic or Author"
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "0px",
                    alignItems: "center",
                  }}
                >
                  <h2 className="blog-title">{post.title}</h2>
                    <p
                      style={{ color: "#ff9900", cursor: "pointer" }}
                      onClick={() => handleDelete(post)}
                    >
                    {post.authorName == username ? <b>Delete Post</b> : ""}  
                    </p>
                </div>
                <p className="blog-info">
                  <span className="author-name">{post.authorName}</span> |{" "}
                  <span className="topic">{post.topic}</span>
                </p>
                <p className="blog-text">{post?.content?.substring(0, 300)}</p>
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
