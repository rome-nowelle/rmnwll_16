import React from 'react';

// Assets
import profilePic from '../assets/profile-pic.jpg'; 

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

// LeftSection Component
const LeftSection = () => {
    return (
        <div className="left-section">
            <img src={profilePic} alt="Rmnwll_" className="profile-pic" />

            <div className="personal-info">
                <h2>Rome Nowelle R. Sanares</h2>
                <p>BSIT Graduate</p>
            </div>

            <hr />

            <div className="contact-info">
                <ul>
                    <li>
                        <EmailRoundedIcon sx={{ fontSize: 25 }} />
                        <div className="info">
                            <span>Email</span>
                            <p>romenowellesanares@gmail.com</p>
                        </div>
                    </li>

                    <li>
                        <PhoneAndroidRoundedIcon sx={{ fontSize: 25 }} />
                        <div className="info">
                            <span>Contact Number</span>
                            <p>0995485154</p>
                        </div>
                    </li>

                    <li>
                        <LocationOnRoundedIcon sx={{ fontSize: 25 }} />
                        <div className="info">
                            <span>Location</span>
                            <p>Imus City, Cavite, Philippines</p>
                        </div>
                    </li>
                </ul>
            </div>

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
        </div>
    );
};

export default LeftSection;