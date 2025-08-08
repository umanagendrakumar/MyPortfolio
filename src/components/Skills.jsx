import { SiJavascript, SiMongodb, SiExpress, SiReact, SiRedux, SiNodedotjs, SiGit, SiPostman, SiVercel, SiNetlify, SiTailwindcss, SiDaisyui } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

const skills = [
    { name: "JavaScript", borderHoverColor: "hover:border-yellow-400", icon: <SiJavascript className="text-yellow-400"/> },
    { name: "MongoDB", borderHoverColor: "hover:border-green-500", icon: <SiMongodb className="text-green-500" /> },
    { name: "Express.js", borderHoverColor: "hover:border-gray-200",  icon: <SiExpress className="text-gray-200" /> },
    { name: "React.js", borderHoverColor: "hover:border-blue-400", icon: <SiReact className="text-blue-400" /> },
    { name: "Redux", borderHoverColor: "hover:border-purple-400", icon: <SiRedux className="text-purple-400" /> },
    { name: "Node.js", borderHoverColor: "hover:border-green-700", icon: <SiNodedotjs className="text-green-700" /> },
    { name: "Git", borderHoverColor: "hover:border-orange-400", icon: <SiGit className="text-orange-400" /> },
    { name: "Postman", borderHoverColor: "hover:border-orange-500", icon: <SiPostman className="text-orange-500" /> },
    { name: "Vercel", borderHoverColor: "hover:border-white", icon: <SiVercel className="text-black dark:text-white" /> },
    { name: "Netlify", borderHoverColor: "hover:border-blue-500", icon: <SiNetlify className="text-blue-500" /> },
    { name: "TailwindCSS", borderHoverColor: "hover:border-cyan-400", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Daisyui", borderHoverColor: "hover:border-pink-400", icon: <SiDaisyui className="text-pink-400" /> },
    { name: "DBMS", borderHoverColor: "hover:border-blue-700", icon: <FaDatabase className="text-blue-700" /> },
    { name: "OS", borderHoverColor: "hover:border-gray-400", icon: <MdOutlineComputer className="text-gray-400" /> },
    { name: "CN", borderHoverColor: "hover:border-gray-400", icon: <MdOutlineComputer className="text-gray-400" /> },
];

const Skills = () => {
    return (
        <>
            <main
                className="card bg-base-100 px-6 shadow-sm flex-1 flex justify-center items-center"
                role="main"
            >
                <section
                    className="w-full max-w-5xl mx-auto py-12 flex flex-col items-center"
                    aria-label="Skills Section"
                >
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
                        {skills.map((skill) => (
                            <li
                                key={skill.name}
                                className={`${skill.borderHoverColor} rounded-xl flex flex-col items-center justify-center py-6 px-4 border border-gray-400`}
                                aria-label={skill.name}
                            >
                                <span className="mb-4 text-[48px]">{skill.icon}</span>
                                <span className="font-semibold text-lg text-gray-100">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
};

export default Skills;