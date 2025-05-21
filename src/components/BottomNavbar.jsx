import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return(
        <div className="flex justify-center sm:hidden pb-2">
                <ul className="flex text-xl gap-10">
                    <li><Link to="/"><FaHome title="Home" /></Link></li>
                    <li><Link to="/about"><FaUser title="About" /></Link></li>
                    <li><Link to="/projects"><FaProjectDiagram title="Projects" /></Link></li>
                    <li><Link to="/skills"><FaTools title="Skills" /></Link></li>
                    <li><Link to="/contact"><FaEnvelope title="Contact" /></Link></li>
                </ul>
            </div>
    );
}

export default BottomNavbar;