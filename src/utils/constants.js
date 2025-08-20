import devcharge from "../assets/devcharge.png"
import netflicGPT from "../assets/NetflicGPT.png"
import biteFood from "../assets/biteFood.png"
import portfolio from "../assets/portfolio.png"
import converterImg from "../assets/converter.png"
import ultraEditClone from "../assets/ultraEditClone.png" 
import todoList from "../assets/todoList.png"
import profileCard from "../assets/profileCard.png"

export const projectsData = [
    {
        id: "project1",
        imageUrl: devcharge,
        title: "DevCharge",
        description: "A real-time matchmaking platform where developers can discover and connect with like-minded peers, inspired by Tinder, but built for devs.",
        tech: "MERN stack",
        links: {
            active: true,
            live: "https://devcharge.netlify.app/",
            github: "https://github.com/umanagendrakumar/DEVcharge-BackEnd",
        },
    },
    {
        id: "project2",
        imageUrl: netflicGPT,
        title: "NetflicGPT",
        description: "A Netflix clone integrated with OpenAI's GPT, allowing users to search for movies and get recommendations based on their preferences.",
        tech: "React.js + Taiwind CSS",
        links: {
            live: "",
            github: "",
        },
        extra4Proj2: true,
    },
    {
        id: "project3",
        imageUrl: biteFood,
        title: "BiteFood",
        description: "BiteFood is a mini food web application inspired by Swiggy. This project is a work in progress and is helping me strengthen my React development skills.",
        tech: "React.js + Taiwind CSS",
        links: {
            active: true,
            live: "https://projectbitefood.netlify.app/",
            github: "https://github.com/umanagendrakumar/bite-food",
        },
         extra4Proj3: true,
    },
    {
        id: "project4",
        imageUrl: portfolio,
        title: "Portfolio",
        description: "A personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience. It reflects my development style, UI design approach.",
        tech: "React.js + Taiwind CSS",
        links: {
            active: true,
            live: "#",
            github: "https://github.com/umanagendrakumar/MyPortfolio",
        },
    },
    {
        id: "project5",
        imageUrl: converterImg,
        title: "GPA Converter",
        description: "A GPA Converter built using HTML, CSS, and JavaScript to solve a real problem faced by me and my friends. It quickly converts grades to SGPA using a simple, user-friendly interface.",
        tech: "HTML, CSS, JavaScript",
        links: {
            active: true,
            live: "https://uma03.netlify.app/",
            github: "https://github.com/umanagendrakumar/5thSemester-Grade-to-SGPA",
        },
    },
    {
        id: "project6",
        imageUrl: ultraEditClone,
        title: "UltraEdit Clone",
        description: "A responsive UltraEdit clone built with HTML and CSS, featuring a clean and user-friendly interface that adapts smoothly to different screen sizes.",
        tech: "HTML, CSS",
        links: {
            active: true,
            live: "https://uma-ultraedit.netlify.app/",
            github: "https://github.com/umanagendrakumar/UltraEdit_Clone",
        },
        extra4Proj6: true
    },
    {
        id: "project7",
        imageUrl: todoList,
        title: "Todo List",
        description: "A simple and interactive To-Do List web app built with HTML, CSS. Users can add, delete, and mark tasks as completed. Tasks are saved in the browser’s local storage.",
        tech: "HTML, CSS",
        links: {
            active: true,
            live: "https://uma-todolist.netlify.app/",
            github: "https://github.com/umanagendrakumar/Todo_List",
        },
    },
    {
        id: "project8",
        imageUrl: profileCard,
        title: "Profile Card",
        description: "A responsive profile card built using HTML and CSS. This was my first frontend project helping me understand layout, styling. A Small try haha...",
        tech: "HTML, CSS",
        links: {
            active: true,
            live: "https://uma-card.netlify.app/",
            github: "https://github.com/umanagendrakumar/My-Profile-Card",
        },
    },
]