import { Link } from 'react-router-dom';
import { FiDownload, FiUser } from 'react-icons/fi'
import { MdPerson } from 'react-icons/md';

const About = () => {
    return (
        <main className="card bg-base-100 px-6 shadow-sm flex-1 flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-auto">
                <div className="items-center text-justify max-w-[450px]">
                    <h2 className="card-title text-2xl mb-2">Who am I ?</h2>
                    <p className="text-sm">Hey there! I’m a final-year Computer Science Engineering student at Acharya Nagarjuna University with a deep passion for solving real-world problems through code.

                        Over time, I’ve developed a strong foundation in the <span className=' text-violet-300 font-bold'>MERN Stack, Tailwind CSS, Java,</span> and version control tools like <span className=' text-violet-300 font-bold'>Git & GitHub</span>. I'm also sharpening my problem-solving skills by diving deep into <span className=' text-violet-300 font-bold'>Data Structures and Algorithms (DSA)</span> — because I believe writing efficient code is just as important as writing functional code.

                        <br></br> <br></br>Beyond academics, I thrive on continuous learning, and contributing to projects that challenge me to grow. I am always eager to collaborate with like-minded professionals, take on challenging projects, and stay updated with the latest advancements in modern technologies.

                        <br></br> <br></br>Let’s connect, create, and code something impactful together!</p>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary"><FiDownload />Resume</button>
                        <Link to='/contact' className="btn btn-primary"><MdPerson />Contact Me</Link>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default About;
// <main className="card bg-base-100 px-6 shadow-sm flex-1 ">