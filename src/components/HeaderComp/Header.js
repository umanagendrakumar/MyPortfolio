import { Link } from "react-router-dom";
const Header = () => {
    return (

        <div className="header">
            <img src="/" alt="logo" />
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