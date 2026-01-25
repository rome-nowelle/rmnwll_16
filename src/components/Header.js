import React from "react";
import "./styles/header.css";
import Closed from "@mui/icons-material/Close";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

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

            <nav className="navbar">
                <ul>
                    <div className="closed">
                        <Closed className="close" onClick={showMenu} />
                    </div>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Resume</Link>
                    </li>
                    <li>
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <Link to="/">Skills</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
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
