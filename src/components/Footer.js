import React from 'react';

// Styles
import './styles/footer.css';

// Images
import Logo from '../assets/img/logo.png';

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className="footer-cont">
            <div className="social-links">
                <a href="https://www.facebook.com/your.username" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://www.linkedin.com/in/your.username" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/your.username" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </div>
            <div className="footer">
                <p>&copy; 2026 Rmnwll_. All rights reserved.</p>
                <img src={Logo} alt="Rmnwll_ Logo" />
            </div>
        </footer >
    );
}

export default Footer;