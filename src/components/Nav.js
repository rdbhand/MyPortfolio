import '../styles/Nav.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Nav(){


  return(
    <>
    <div id="nav-box">
     <BrowserRouter>
    
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/projects"><li>Projects</li></Link>
      <Link to="/achievements"><li>Achievements</li></Link>
    </ul>
   
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/achievements" element={<Achievements/>}></Route>
     
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default Nav;