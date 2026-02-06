import React from "react";

// Styles
import "./styles/header.css";

// Icons
import Closed from "@mui/icons-material/Close";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// Router
import { NavLink } from "react-router-dom";

// Images
import logo from '../assets/img/logo.png';


const Header = () => {
    const [active, setActive] = React.useState(false);

    const openMenu = () => {
        setActive(true);
    };

    const closeMenu = () => {
        setActive(false);
    };

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Rmnwll_" />
                <h1>Rmnwll_</h1>
            </div>

            <nav className={`navbar ${active ? "active" : ""}`}>
                <ul className="nav-list">
                    <li className="closed">
                        <Closed className="close" onClick={closeMenu} />
                    </li>

                    <li className="nav-item">
                        <NavLink to="/" end className="nav-link" onClick={closeMenu}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/resume" className="nav-link" onClick={closeMenu}>
                            Resume
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/skills" className="nav-link" onClick={closeMenu}>
                            Skills
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="menu">
                <MenuRoundedIcon className="menu-icon" onClick={openMenu}  />
            </div>
        </div>
    );
};

export default Header;
