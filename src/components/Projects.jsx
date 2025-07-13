import converterImg from "../assets/converter.png"
import biteFood from "../assets/biteFood.png"
import portfolio from "../assets/portfolio.png"
const Projects = () => {
    return (
        <main className="card bg-base-100 px-6 shadow-sm flex-1 flex justify-center items-center">

            <div className="carousel max-w-[300px] h-112">
                <div id="project1" className="carousel-item w-full flex flex-col">
                    <img
                        src="https://cdn-dkepej.nitrocdn.com/xHPizjaXJNONuYnLnfsGSUCsMnIlzOEq/assets/images/optimized/rev-ef469ea/blog.frame.io/wp-content/uploads/2023/02/insider-tips-resolve.jpg"
                        className="w-full h-[50%] object-fill mb-4"
                        alt="Tailwind CSS Carousel component" />
                    <h1 className="font-bold text-2xl mb-2">DEVcharge</h1>
                    <p className="mb-2">A real-time matchmaking platform where developers can discover and connect with like-minded peers, inspired by Tinder, but built for devs.</p>
                    <p className="mb-4 text-violet-400 font-medium">Tech: MERN stack</p>
                    <div className="flex items-center gap-4">
                        <a href="https://devcharge.netlify.app/" className="btn btn-primary">Live</a>
                        <a href="https://github.com/umanagendrakumar/DEVcharge-BackEnd" className="btn btn-primary">Github</a>
                    </div>
                </div>
                <div id="project2" className="carousel-item w-full flex flex-col">
                    <img
                        src={biteFood}
                        className="w-full h-[50%] object-fill mb-4"
                        alt="Tailwind CSS Carousel component" />
                    <h1 className="font-bold text-2xl mb-2">BiteFood</h1>
                    <p className="mb-2">BiteFood is a mini food web application inspired by Swiggy. This project is a work in progress and is helping me strengthen my React development skills.</p>
                    <p className="mb-2 text-red-400 text-xs">To Go live CORS Extension Recommended - <a href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en" className="text-sm font-bold underline">Install</a></p>
                    <p className="mb-4 text-violet-400 font-medium">Tech: React.js + Taiwind CSS</p>
                    <div className="flex items-center gap-4">
                        <a href="https://projectbitefood.netlify.app/" className="btn btn-primary">Live</a>
                        <a href="https://github.com/umanagendrakumar/bite-food" className="btn btn-primary">Github</a>
                    </div>
                </div>
                <div id="project3" className="carousel-item w-full flex flex-col">
                    <img
                        src={portfolio}
                        className="w-full h-[50%] object-fill mb-4"
                        alt="Tailwind CSS Carousel component" />
                    <h1 className="font-bold text-2xl mb-2">Portfolio</h1>
                    <p className="mb-2">A personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience.
                        It reflects my development style, UI design approach. </p>
                    <p className="mb-4 text-violet-400 font-medium">Tech: React.js + Taiwind CSS</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="btn btn-primary">Live</a>
                        <a href="https://github.com/umanagendrakumar/MyPortfolio" className="btn btn-primary">Github</a>
                    </div>
                </div>
                <div id="project4" className="carousel-item w-full flex flex-col">
                    <img
                        src={converterImg}
                        className="w-full h-[50%] object-fill mb-4"
                        alt="Tailwind CSS Carousel component" />
                    <h1 className="font-bold text-2xl mb-2">GPA Converter</h1>
                    <p className="mb-2">A GPA Converter built using HTML, CSS, and JavaScript to solve a real problem faced by me and my friends.
                        It quickly converts grades to SGPA using a simple, user-friendly interface.
                    </p>
                    <p className="mb-4 text-violet-400 font-medium">Tech: HTML, CSS, JavaScript</p>
                    <div className="flex items-center gap-4">
                        <a href="https://uma03.netlify.app/" className="btn btn-primary">Live</a>
                        <a href="https://github.com/umanagendrakumar/5thSemester-Grade-to-SGPA" className="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#project1" className="btn btn-sm">1</a>
                <a href="#project2" className="btn btn-sm">2</a>
                <a href="#project3" className="btn btn-sm">3</a>
                <a href="#project4" className="btn btn-sm">4</a>
            </div>

        </main>
    );
};

export default Projects;