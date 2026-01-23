import React from "react";
import "./styles/Header.css";
import Closed from "@mui/icons-material/Close";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <h1>Rmnwll_</h1>

            <nav>
                <ul>
                    <div className="Closed">
                        <Closed className="close" />
                    </div>
                    <li>
                        <Link to="/">About</Link>
                        <Link to="/">Resume</Link>
                        <Link to="/">Projects</Link>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="menu">
                <MenuBookOutlined className="menu" />
            </div>
        </div>
    );
};

export default Header;
