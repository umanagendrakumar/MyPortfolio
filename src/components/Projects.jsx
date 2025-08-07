import converterImg from "../assets/converter.png"
import biteFood from "../assets/biteFood.png"
import portfolio from "../assets/portfolio.png"

const projectsData = [
    {
        id: "project1",
        imageUrl: "https://cdn-dkepej.nitrocdn.com/xHPizjaXJNONuYnLnfsGSUCsMnIlzOEq/assets/images/optimized/rev-ef469ea/blog.frame.io/wp-content/uploads/2023/02/insider-tips-resolve.jpg",
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
]
const Projects = () => {
    return (
        <main className="card bg-base-100 px-6 shadow-sm flex-1 flex justify-center items-center">
            <div className="carousel max-w-[300px] h-114">
                {
                    projectsData.map((project) => (
                        <div key={project.id} id={project.id} className="carousel-item w-full flex flex-col">
                            <img
                                src={project.imageUrl}
                                className="w-full h-[50%] object-fill mb-4"
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