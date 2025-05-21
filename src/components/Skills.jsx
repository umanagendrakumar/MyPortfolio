import { SiJavascript, SiMongodb, SiExpress, SiReact, SiRedux, SiNodedotjs, SiGit, SiPostman, SiVercel, SiNetlify, SiTailwindcss, SiDaisyui } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

const Skills = () => {
    return (
        <main className="card bg-base-100 px-6 pt-2 shadow-sm flex-1 justify-center items-center">
            <div className="flex flex-wrap gap-4 justify-center items-center max-w-[770px]">
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiJavascript className="text-[50px]" />JavaScript</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiMongodb className="text-[50px]" />Mongodb</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiExpress className="text-[50px]" />Express.js</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiReact className="text-[50px]" />React.js</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiRedux className="text-[50px]" />Redux</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiNodedotjs className="text-[50px]" />Node.js</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiGit className="text-[50px]" />Git</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiPostman className="text-[50px]" />Postman</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiVercel className="text-[50px]" />Vercel</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiNetlify className="text-[50px]" />Netlify</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiTailwindcss className="text-[50px]" />Tailwindcss</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><SiDaisyui className="text-[50px]" />Daisyui</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><FaDatabase className="text-[50px]" />DBMS</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><MdOutlineComputer className="text-[50px]" />OS</div>
                <div className="border w-35 h-35 flex flex-col justify-center items-center gap-4 font-bold"><MdOutlineComputer className="text-[50px]" />CN</div>
            </div>
        </main>
    );
};

export default Skills;