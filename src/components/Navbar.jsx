import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';

const Navbar = ({value}) => {
    return ( 
        <nav className="navbar flex justify-around bg-base-300 sticky top-0 z-1">
            <div>
                <Link to="/" className="font-bold text-xl">{value}</Link>
            </div>
            <div className="hidden sm:block">
                <ul className="flex text-xl gap-8 ">
                    <li><Link to="/"><FaHome title="Home" /></Link></li>
                    <li><Link to="/about"><FaUser title="About" /></Link></li>
                    <li><Link to="/projects"><FaProjectDiagram title="Projects" /></Link></li>
                    <li><Link to="/skills"><FaTools title="Skills" /></Link></li>
                    <li><Link to="/contact"><FaEnvelope title="Contact" /></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;