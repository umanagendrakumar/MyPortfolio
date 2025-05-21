import converterImg from "../assets/converter.png"
import biteFood from "../assets/biteFood.png"
const Projects = () => {
    return (
        <main className="card bg-base-100 px-6 shadow-sm flex-1 flex justify-center items-center">

            <div className="carousel max-w-[300px] h-110">
                <div id="project1" className="carousel-item w-full flex flex-col">
                    <img
                        src="https://cdn-dkepej.nitrocdn.com/xHPizjaXJNONuYnLnfsGSUCsMnIlzOEq/assets/images/optimized/rev-ef469ea/blog.frame.io/wp-content/uploads/2023/02/insider-tips-resolve.jpg"
                        className="w-full h-[50%] object-fill mb-4"
                        alt="Tailwind CSS Carousel component" />
                    <h1 className="font-bold text-2xl mb-2">DEVcharge</h1>
                    <p className="mb-2">A real-time matchmaking platform where developers can discover and connect with like-minded peers, inspired by Tinder, but built for devs.</p>
                    <p className="text-sm mb-4">Tech: MERN</p>
                    <div className="flex items-center gap-4">
                        <a href="" className="btn btn-primary">Live</a>
                        <a href="" className="btn btn-primary">Github</a>
                    </div>
                </div>
                <div id="project2" className="carousel-item w-full flex flex-col">
                    <img
                        src={biteFood}
                        className="w-full h-[50%] object-fill mb-4"
                        alt="Tailwind CSS Carousel component" />
                    <h1 className="font-bold text-2xl mb-2">BiteFood</h1>
                    <p className="mb-2">Mini Food Restaurant skeleton using swiggy api.</p>
                    <p className="mb-4">Tech: React.js + Taiwind CSS</p>
                    <div className="flex items-center gap-4">
                        <a href="" className="btn btn-primary">Live</a>
                        <a href="" className="btn btn-primary">Github</a>
                    </div>
                </div>
                <div id="project3" className="carousel-item w-full flex flex-col">
                    <img
                        src={converterImg}
                        className="w-full h-[50%] object-fill mb-4"
                        alt="Tailwind CSS Carousel component" />
                    <h1 className="font-bold text-2xl mb-2">GPA Converter</h1>
                    <p className="mb-2">Converting Grades to GPA</p>
                    <p className="mb-4">Tech: HTML, CSS, JavaScript</p>
                    <div className="flex items-center gap-4">
                        <a href="" className="btn btn-primary">Live</a>
                        <a href="" className="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#project1" className="btn btn-xs">1</a>
                <a href="#project2" className="btn btn-xs">2</a>
                <a href="#project3" className="btn btn-xs">3</a>
            </div>

        </main>
    );
};

export default Projects;