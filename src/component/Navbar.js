import './Navbar.css'
import './LoginPage.css'
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {

  const navigate = useNavigate();

  
  function handleHome(){
    navigate('/')
  }
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleUserClick = () => {
    setShowLogin(true);
  };
  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [bloguser, setUser] = useState('');

 

//   const handleSubmit = (e) => {
//     const bloguser=[{name,email}]
//     localStorage.setItem('bloguser', JSON.stringify(bloguser))
//     setUser(localStorage.getItem('bloguser'))
// setName('')
// setEmail('')
// handleCloseLogin()
//   };

// const user = localStorage.getItem("bloguser");
// const userparse = JSON.parse(user);
// const username = userparse.authorName;

async function handleSubmit(e){
e.preventDefault();
  const userdata = {
authorName: name,
password: password
  }
  await fetch("https://blog-website-73p2.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  })
  .then((res) => res.json())
  .then((data) => {
    if(data.authorName!==undefined){
      localStorage.setItem('bloguser', JSON.stringify(data))
      setUser(JSON.stringify(data))
      setName('')
setEmail('')
setPassword("")
handleCloseLogin()
    }else{
      toast.error(data)
    }
    })
  .catch((err) => {
      console.log(err);
    });
}

useEffect(()=>{
  if(localStorage.getItem('bloguser')){
    setUser(JSON.parse(localStorage.getItem('bloguser')))
  }
},[])

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseRegister=()=>{
    setShowRegister(false)
  }

const handleLogout=()=>{
  localStorage.removeItem('bloguser')
  setUser('')
}
function handleCreateBlog(){
  if(bloguser){
  navigate('/createblog')
}else{
  toast.error('Login to create blog')
}
}

async function handleRegister(){
  const userdata = {
authorName: name,
email: email,
password: password
  }
  await fetch("https://blog-website-73p2.onrender.com/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  })
  .then((res) => res.json())
  .then((data) => {
    // toast.success();
    })
  .catch((err) => {
      console.log(err);
    });
}

  return (
    <>
   <nav>
      <div className="navbar-left">
        <h1>Blogs.</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li onClick={handleHome}>Home</li>
          <li onClick={handleCreateBlog}>Create Blog</li>
          {bloguser ? <li onClick={handleLogout}>LogOut</li>  : <li onClick={handleUserClick}>Login</li>}
          
        </ul>
      </div>
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
          <div className="login-page">
         <div className="header">
        <h2>Login</h2>
        <button className="close-button" onClick={handleCloseLogin}>
          &#x2716;
        </button>
      </div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
      <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{marginBottom:"2px"}}>If not user <span onClick={handleRegisterClick} style={{color:"orange", cursor:"pointer"}}>REGISTER</span></div>
        <button type="submit">Login</button>
      </form>
    </div>
          </div>
        </div>
      )}
      {
        showRegister && (
          <div className="modal">
          <div className="modal-content">
          <div className="login-page">
         <div className="header">
        <h2>Register</h2>
        <button className="close-button" onClick={handleCloseRegister}>
          &#x2716;
        </button>
      </div>
      <form onSubmit={handleRegister}>
      <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
          </div>
        </div>
        )
      }
    </nav>
    <ToastContainer
        position="top-right"
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
  </>
  )
}

export default Navbar