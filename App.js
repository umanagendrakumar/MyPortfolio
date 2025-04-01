import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/HeaderComp/Header';
import Body from './src/components/BodyComp/Body';
import Footer from './src/components/FooterComp/Footer';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './src/components/BodyComp/AboutPage';
import Skills from './src/components/BodyComp/SkillsPage';
import Projects from './src/components/BodyComp/ProjectsPage';
import Contact from './src/components/BodyComp/ContactPage';



const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);