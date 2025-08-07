import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AppLayout = ({ val }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar value={val} />
      <Outlet />
      <Footer />
    </div>
  )
}

const RoutesWithDynamicHeading = () => {
  const [heading, setHeading] = useState("KunK");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setHeading("KunK");
    else if (path === "/about") setHeading("ABOUT");
    else if (path === "/projects") setHeading("PROJECTS");
    else if (path === "/skills") setHeading("SKILLS");
    else if (path === "/contact") setHeading("CONTACT");
    else setHead("KunK"); // fallback
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<AppLayout val={heading} />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    </Routes>

  )
}

const App = () => {
  return (
    <BrowserRouter>
      <RoutesWithDynamicHeading />
    </BrowserRouter>
  );
}

export default App;
