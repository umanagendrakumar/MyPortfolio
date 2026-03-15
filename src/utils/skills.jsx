import { FaJava } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiJavascript, SiSpringboot, SiHibernate, 
    SiMysql ,SiMongodb, SiExpress, 
    SiReact, SiNodedotjs, SiGit, 
    SiPostman, SiTailwindcss } from "react-icons/si";

export const skills = [
    { name: "Java", borderHoverColor: "hover:border-red-500", icon: <FaJava className="text-red-500" /> },

    { name: "JavaScript", borderHoverColor: "hover:border-yellow-400", icon: <SiJavascript className="text-yellow-400" /> },

    { name: "SQL", borderHoverColor: "hover:border-blue-500", icon: <BsFiletypeSql className="text-blue-500" /> },

    { name: "Spring Boot", borderHoverColor: "hover:border-green-500", icon: <SiSpringboot className="text-green-500" /> },

    { name: "Hibernate", borderHoverColor: "hover:border-blue-500", icon: <SiHibernate className="text-blue-500" /> },

    { name: "MySQL", borderHoverColor: "hover:border-blue-700", icon: <SiMysql className="text-cyan-400" /> },

    { name: "MongoDB", borderHoverColor: "hover:border-green-500", icon: <SiMongodb className="text-green-500" /> },

    { name: "Express.js", borderHoverColor: "hover:border-gray-200", icon: <SiExpress className="text-gray-200" /> },

    { name: "React.js", borderHoverColor: "hover:border-blue-400", icon: <SiReact className="text-blue-400" /> },

    { name: "Node.js", borderHoverColor: "hover:border-green-700", icon: <SiNodedotjs className="text-green-700" /> },

    { name: "Git", borderHoverColor: "hover:border-orange-400", icon: <SiGit className="text-orange-400" /> },

    { name: "Postman", borderHoverColor: "hover:border-orange-500", icon: <SiPostman className="text-orange-500" /> },

    { name: "TailwindCSS", borderHoverColor: "hover:border-cyan-400", icon: <SiTailwindcss className="text-cyan-400" /> },

];