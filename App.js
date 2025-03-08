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


// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children:[
//       {
//         path: "/",
//         element: <Body />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/skills",
//         element: <Skills />
//       },
//       {
//         path: "/projects",
//         element: <Projects />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       }
//     ]
//   }
// ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);







/*
        1. install react and react-dom using npm or yarn
        2. import react and react-dom in our js file
        3. use react.createElement to create react elements
        4. use ReactDOM.createRoot to create a root element
        5. use root.render to render the react element in the dom.

        - jsx
        browsers dont understand jsx so we need to convert it to js
        - babel
        - babel is a transpiler
        - it converts jsx to js
        

    




*/

/*

        3.Now Installation of react into our package
            -npm install react
                and
            -npm install react-dom

        4.After that we can create a react app
            -to run it we need to use parcel
                -npx parcel entry_point (npx parcel index.html)


*/