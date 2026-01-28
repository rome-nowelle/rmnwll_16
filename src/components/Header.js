import React from "react";

// Styles
import "./styles/header.css";

// Icons
import Closed from "@mui/icons-material/Close";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";

// Router
import { NavLink } from "react-router-dom";

// Images
import logo from '../assets/img/logo.png';


const Header = () => {

    const [active, setActive] = React.useState(false);

    function showMenu() {
        setActive(!active);
    }

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Rmnwll_" />
                <h1>Rmnwll_</h1>
            </div>

            <nav className={`navbar ${active ? "active" : ""}`}>
                <ul className="nav-list">
                    <li className="closed">
                        <Closed className="close" onClick={showMenu} />
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" end className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/resume" className="nav-link">Resume</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/skills" className="nav-link">Skills</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="menu">
                <MenuBookOutlined className="menu-icon" onClick={showMenu} />
            </div>
        </div>
    );
};

export default Header;
