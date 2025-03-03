import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg';
const Header = () => {
    return (

        <div className="header">
            <img className="logo-img" src={logo} alt="logo" />
            <div className="navitems">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>


    );
}

export default Header;