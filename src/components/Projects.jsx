import devcharge from "../assets/devcharge.png"
import biteFood from "../assets/biteFood.png"
import portfolio from "../assets/portfolio.png"
import converterImg from "../assets/converter.png"
import ultraEditClone from "../assets/ultraEditClone.png" 
import todoList from "../assets/todoList.png"
import profileCard from "../assets/profileCard.png"

const projectsData = [
    {
        id: "project1",
        imageUrl: devcharge,
        title: "DEVcharge",
        description: "A real-time matchmaking platform where developers can discover and connect with like-minded peers, inspired by Tinder, but built for devs.",
        tech: "MERN stack",
        links: {
            live: "https://devcharge.netlify.app/",
            github: "https://github.com/umanagendrakumar/DEVcharge-BackEnd",
        },
    },
    {
        id: "project2",
        imageUrl: biteFood,
        title: "BiteFood",
        description: "BiteFood is a mini food web application inspired by Swiggy. This project is a work in progress and is helping me strengthen my React development skills.",
        tech: "React.js + Taiwind CSS",
        links: {
            live: "https://projectbitefood.netlify.app/",
            github: "https://github.com/umanagendrakumar/bite-food",
        },
        extra: true,
    },
    {
        id: "project3",
        imageUrl: portfolio,
        title: "Portfolio",
        description: "A personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience. It reflects my development style, UI design approach.",
        tech: "React.js + Taiwind CSS",
        links: {
            live: "#",
            github: "https://github.com/umanagendrakumar/MyPortfolio",
        },
    },
    {
        id: "project4",
        imageUrl: converterImg,
        title: "GPA Converter",
        description: "A GPA Converter built using HTML, CSS, and JavaScript to solve a real problem faced by me and my friends. It quickly converts grades to SGPA using a simple, user-friendly interface.",
        tech: "HTML, CSS, JavaScript",
        links: {
            live: "https://uma03.netlify.app/",
            github: "https://github.com/umanagendrakumar/5thSemester-Grade-to-SGPA",
        },
    },
    {
        id: "project5",
        imageUrl: ultraEditClone,
        title: "UltraEdit Clone",
        description: "A responsive UltraEdit clone built with HTML and CSS, featuring a clean and user-friendly interface that adapts smoothly to different screen sizes.",
        tech: "HTML, CSS",
        project5: true,
        links: {
            live: "https://uma-ultraedit.netlify.app/",
            github: "https://github.com/umanagendrakumar/UltraEdit_Clone",
        },
    },
    {
        id: "project6",
        imageUrl: todoList,
        title: "Todo List",
        description: "A simple and interactive To-Do List web app built with HTML, CSS. Users can add, delete, and mark tasks as completed. Tasks are saved in the browser’s local storage.",
        tech: "HTML, CSS",
        links: {
            live: "https://uma-todolist.netlify.app/",
            github: "https://github.com/umanagendrakumar/Todo_List",
        },
    },
    {
        id: "project7",
        imageUrl: profileCard,
        title: "Profile Card",
        description: "A responsive profile card built using HTML and CSS. This was my first frontend project helping me understand layout, styling. A Small try haha...",
        tech: "HTML, CSS",
        links: {
            live: "https://uma-card.netlify.app/",
            github: "https://github.com/umanagendrakumar/My-Profile-Card",
        },
    },
]
const Projects = () => {
    return (
        <main className="card bg-base-100 px-6 shadow-sm flex-1 flex justify-center items-center">
            <div className="carousel max-w-[350px] h-124">
                {
                    projectsData.map((project) => (
                        <div key={project.id} id={project.id} className="carousel-item w-full flex flex-col">
                            <img
                                src={project.imageUrl}
                                className="w-full h-[50%] object-fill rounded mb-4"
                                alt={project.title}
                            />
                            <h1 className="font-bold text-2xl mb-2">{project.title}</h1>
                            <p className="mb-2">{project.description}</p>

                            {project.extra && (
                                <p className="mb-2 text-red-400 text-xs">
                                    To Go live CORS Extension Recommended -{" "}
                                    <a
                                        href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en"
                                        className="text-sm font-bold underline"
                                    >
                                        Install
                                    </a>
                                </p>
                            )}
                            {project.project5 && (
                                <p className="mb-2 text-sm text-cyan-200">
                                Orginal Site : <a href="https://www.ultraedit.com/downloads/ultraedit-download-thank-you/" className="underline">view</a>
                                </p>
                            )}

                            <p className="mb-4 text-violet-400 font-medium">Tech: {project.tech}</p>
                            <div className="flex items-center gap-4">
                                <a href={project.links.live} className="btn btn-primary">
                                    Live
                                </a>
                                <a href={project.links.github} className="btn btn-primary">
                                    Github
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex w-full justify-center gap-2 py-2">
                {
                    projectsData.map((project, index) => {
                        return <a key={index} href={`#${project.id}`} className="btn btn-sm">{index + 1}</a>
                    })
                }
            </div>

        </main>
    );
};

export default Projects;