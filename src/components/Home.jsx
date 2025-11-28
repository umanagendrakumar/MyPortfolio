import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Photo from "../assets/MyPhoto.jpg"

const Home = () => {
    return (
        <main className="card bg-base-100 px-6 shadow-sm flex-1">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-auto">
                <figure>
                    <img
                        src={Photo}
                        alt="Profile pic"
                        className="rounded-[50%] p-1 h-64 w-64 object-cover border-2 border-gray-700" />
                </figure>
                <div className="card-body max-w-[450px] border-l">
                    <h2 className="card-title text-2xl">Hello, I'm</h2>
                    <h2 className="card-title text-2xl text-violet-400">Kambala Uma Nagendra Kumar</h2>
                    <p className="text-xl">Aspiring Developer</p>
                    <p className="text-md text-gray-400">Software Developer | Full Stack Developer </p>
                    <p className="text-xs text-justify hidden sm:block">I am always eager to collaborate with like-minded professionals, take on challenging projects, and stay updated with the latest advancements in modern technologies.</p>
                    <div className="card-actions mt-4">
                        <a
                            href="https://www.linkedin.com/in/kunk/" className="text-2xl text-blue-300 mr-4 border rounded-full p-2"
                            title='Linkedin'><FaLinkedin />
                        </a>
                        <a 
                        href="https://github.com/umanagendrakumar" className="text-2xl mr-4  border rounded-full p-2"
                        title='Github'><FaGithub />
                        </a>
                        <a 
                        href="https://leetcode.com/u/idkunk/" className="text-2xl mr-4 text-orange-300 border rounded-full p-2"
                        title='Leetcode'><SiLeetcode />
                        </a>
                        {/* <a 
                        href="https://www.hackerrank.com/profile/kambalaumanagen1" 
                        className="text-lg border border-green-500 rounded-full py-2 px-4"
                        title='Hackerrank'>H</a> */}
                    </div>

                </div>
            </div>


        </main>
    );
}

export default Home;