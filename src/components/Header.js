import React from "react";

// Styles
import "./styles/header.css";

// Icon
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

    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="header">
            <div className="logo">
                <NavLink to="/" onClick={closeMenu}>
                    <img src={logo} alt="Rmnwll_" />
                </NavLink>
                <h1>Rmnwll_</h1>
            </div>

            <nav className={`navbar ${active ? "active" : ""}`}>
                <ul className="nav-list">
                    <li className="closed">
                        <MenuRoundedIcon className="close" onClick={closeMenu} />
                    </li>

                    <li className="nav-item">
                        <NavLink to="/" end className="nav-link" onClick={closeMenu}>
                            About
                        </NavLink>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <NavLink to="/resume" className="nav-link" onClick={closeMenu}>
                            Resume
                        </NavLink>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
                            Projects
                        </NavLink>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <NavLink to="/skills" className="nav-link" onClick={closeMenu}>
                            Skills
                        </NavLink>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="menu">
                <MenuRoundedIcon className="menu-icon" onClick={openMenu} />
            </div>

            {isMobile && (
                <div
                    className={`nav-overlay ${active ? "active" : ""}`}
                    onClick={closeMenu}
                />
            )}
        </div>
    );
};

export default Header;
