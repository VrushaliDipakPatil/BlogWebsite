
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import Home from './Home';
import BlogDetail from './component/BlogDetail';
import CreateBlog from './component/CreateBlog';


function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/blogdetail" element={<BlogDetail/>}/>
  <Route path="/createblog" element={<CreateBlog/>}/>
</Routes>
    </>
  );
}

export default App;
