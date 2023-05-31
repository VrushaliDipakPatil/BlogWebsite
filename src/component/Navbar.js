import './Navbar.css'
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

const Navbar = () => {

  const navigate = useNavigate();

  function handleCreateBlog(){
    navigate('/createblog')
  }
  function handleHome(){
    navigate('/')
  }

  return (
    <>
    <nav>
    <ul>
      <li onClick={handleHome}>
       Home
      </li>
      <li onClick={handleCreateBlog}>
        Create Blog
      </li>
    </ul>
  </nav>
  </>
  )
}

export default Navbar