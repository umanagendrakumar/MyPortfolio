import { Link } from "react-scroll";
import logo from '../../../assets/logo.jpg';

const Header = () => {
    return (

        <header className="header">
            <a href="/">
                <img className="logo-img" src={logo} alt="logo" />
            </a>
            <nav className="navitems">
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </nav>
        </header>


    );
}

export default Header;