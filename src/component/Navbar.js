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

  const handleUserClick = () => {
    setShowLogin(true);
  };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [bloguser, setUser] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('bloguser')){
      setUser(JSON.parse(localStorage.getItem('bloguser')))
    }
  })

  const handleSubmit = (e) => {
    const bloguser={name,email}
    localStorage.setItem('bloguser', JSON.stringify(bloguser))
    setUser(localStorage.getItem('bloguser'))
setName('')
setEmail('')
handleCloseLogin()
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

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
          {bloguser?
        <li onClick={handleLogout}>LogOut</li>  :
        <li onClick={handleUserClick}>Login</li>
        }
          
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
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
          </div>
        </div>
      )}
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