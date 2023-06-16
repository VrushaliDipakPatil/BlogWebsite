import React, { useEffect, useState } from "react";
import "./Blogpage.css";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from 'react-icons/fa';


const Blogpage = () => {
  const navigate = useNavigate();
const [blogpostdata, setBlogPostData] = useState();

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/blogs/getallblogs');

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    const responseData = await response.json();
    setBlogPostData(responseData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

useEffect(() => {
  fetchData();
}, []);


async function handleDelete(id){
  await fetch(`http://localhost:5000/api/blogs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => res.json())
  .then((data) => {
      console.log(data);
      if (data === "success") {
        toast.success("Blog Deleted Successfully");
        fetchData()
      }
    })
  .catch((err) => {
      console.log(err);
    });
}

  const handleClick = (post) => {
    navigate("/blogdetail", { state: { post } });
  };

  const handleHome = (post) => {
    navigate("/");
  };

  // const user = localStorage.getItem("bloguser");
  // const userparse = JSON.parse(user);
  // const username = userparse[0].name;

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
            className="search-input"
            placeholder="Search by Topic or Author"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <ul className="blog-list">
        {blogpostdata
          ?.filter((post) => {
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
                    <span
                    className="delete-button"
                      style={{ color: "#ff9900", cursor: "pointer" }}
                      onClick={() => handleDelete(post._id)}
                    >
                    {/* {post.authorName == username ? <FaTrash /> : ""}   */}
                    </span>
                </div>
                <p className="blog-info">
                  <span className="author-name">{post.authorName}</span> |{" "}
                  <span className="topic">{post.topic}</span>
                </p>
                <p className="blog-text"><div  dangerouslySetInnerHTML={{ __html: post?.content.substring(0, 350) }} /></p>
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
