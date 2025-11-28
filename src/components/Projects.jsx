import { projectsInfo } from "../utils/projectsInfo";
const Projects = () => {
    return (
        <main className="card bg-base-100 px-6 shadow-sm flex-1 flex justify-center items-center">
            <div className="carousel max-w-[350px] h-124">
                {
                    projectsInfo.map((project) => (
                        <div key={project.id} id={project.id} className="carousel-item w-full flex flex-col">
                            <img
                                src={project.imageUrl}
                                className="w-full h-[50%] object-fill rounded mb-4"
                                alt={project.title}
                            />
                            <h1 className="font-bold text-2xl mb-2">{project.title}</h1>
                            <p className="mb-2">{project.description}</p>

                            {project.extra4Proj2 && (
                                <p className="mb-2 text-red-400">
                                    Currently Working On it, Deploy Soon...
                                </p>
                            )}
                            {project.extra4Proj3 && (
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

                            {project.extra4Proj6 && (
                                <p className="mb-2 text-sm text-cyan-200">
                                    Orginal Site : <a href="https://www.ultraedit.com/downloads/ultraedit-download-thank-you/" className="underline">view</a>
                                </p>
                            )}

                            <p className="border-x-2 border-violet-200 rounded max-w-fit px-2 mb-4 text-violet-400 font-medium">Tech: {project.tech}</p>

                            {project?.links?.active && (
                                <div className="flex items-center gap-4">
                                    <a href={project.links.live} className="btn btn-primary">
                                        Live
                                    </a>
                                    <a href={project.links.github} className="btn btn-primary">
                                        Github
                                    </a>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>

            <div className="flex w-full justify-center gap-2 py-2">
                {
                    projectsInfo.map((project, index) => {
                        return <a key={index} href={`#${project.id}`} className="btn btn-sm">{index + 1}</a>
                    })
                }
            </div>

        </main>
    );
};

export default Projects;