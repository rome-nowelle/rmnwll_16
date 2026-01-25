import React from "react";
import  "./styles/main.css";
import profilePic from '../assets/profile-pic.jpg';
import Graduate from '@mui/icons-material/School';
import Codes from '@mui/icons-material/Code';
import Windows from '@mui/icons-material/ViewQuiltRounded';
import WebAsset from '@mui/icons-material/WebAsset';
import Design from '@mui/icons-material/ViewListRounded';
import Pup from '../assets//Polytechnic University of the Philippines.png';
import html from '../assets/HTML5.png';
import css from '../assets/CSS.png';
import javascript from '../assets/JavaScript.png';  
import bootstrap from '../assets/Bootstrap.png';
import react from '../assets/React.png';
import typescript from '../assets/Typescript.png';
import figma from '../assets/Figma.png';
import canva from '../assets/Canva.png';


const Main = () => {
    return (
    <div className="main-container">
        <div className="container">
            <div className="main">
                <div className="left-section">
                    <img src={profilePic} alt="Rmnwll_" className="profile-pic" />

                    <div className="personal-info">
                        <h2>Rome Nowelle R. Sanares</h2>
                        <p>BSIT Graduate</p>
                    </div>

                    <div className="contact-info">
                        <ul>
                            <li>
                                {/* <i className="fa-solid fa-envelope"></i> */}
                                <div className="info">
                                    <span>Email</span>
                                    <p>romenowellesanares@gmail.com</p>
                                </div>
                            </li>

                            <li>
                                {/* <i className="fa-solid fa-mobile"></i> */}
                                <div className="info">
                                    <span>Contact Number</span>
                                    <p>0995485154</p>
                                </div>
                            </li>

                            <li>
                                {/* <i className="fa-solid fa-location-dot"></i> */}
                                <div className="info">
                                    <span>Location</span>
                                    <p>Imus City, Cavite, Philippines</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="social-links">
                        {/* <a href="https://www.linkedin.com/in/yourprofile" target="_blank"><i
                            className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank"><i
                            className="fa-brands fa-square-linkedin"></i></a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank"><i
                            className="fa-brands fa-github"></i></a> */}
                    </div>
                </div>
            </div>


            <div className="right-section">
                <h2>About Me</h2>
                <p className="qoute">“Creating modern, responsive, and user-friendly web experiences.”</p>
                <p className="description"> I’m Rome Nowelle R. Sanares, a fresh graduate of BS Information Technology,
                    Magna Cum Laude, from
                    the Polytechnic University of the Philippines. I have a strong interest in front-end development and
                    UI/UX design, and I enjoy creating responsive and user-friendly websites. I’m eager to apply my
                    knowledge and creativity as I begin my professional journey as a Front-End Developer or UI/UX
                    Designer, and I look forward to the opportunity to contribute and collaborate with your team.</p>

                <h3>What I'm Doing</h3>

                <div className="what-i-do-section">
                    <div className="what-i-do">
                        <Windows sx={{ fontSize: 45 }}/>
                        <div className="info-two">
                            <span>Web Design</span>
                            <p>Designing simple, neat, and user-focused layouts that make websites easy to use.</p>
                        </div>
                    </div>

                    <div className="what-i-do">
                        <WebAsset sx={{ fontSize: 45 }}/>
                        <div className="info-two">
                            <span>Web Development</span>
                            <p>Turning ideas into responsive websites that work smoothly on any device.</p>
                        </div>
                    </div>
                </div>

                <h4>Quick Highlights</h4>

                <div className="highlights">
                    <div className="highlight-item">
                        <div className="icon-highlight">
                            <Graduate sx={{ fontSize: 45 }}/>
                            <div>
                                <p>BSIT, Polytechnic University of the Philippines — Magna Cum Laude</p>
                                <li>Focus on Front-End Development, UI/UX Design & basic troubleshooting</li>
                            </div>
                        </div>
                        <div className="logos">
                            <img src={Pup} alt="PUP Manila"></img>
                        </div>
                    </div>

                    <div className="highlight-item">
                        <div className="icon-highlight">
                            <Codes sx={{ fontSize: 45 }}/>
                            <div>
                                <p>Front-End Skills</p>
                                <li>Focused on creating seamless web experiences through front-end technologies.</li>
                            </div>
                        </div>
                        <div className="logos">
                            <img src={html} alt="HTML5 Logo"></img>
                            <img src={css} alt="CSS Logo"></img>
                            <img src={javascript} alt="JavaScript Logo"></img>
                            <img src={bootstrap} alt="Bootstrap Logo"></img>
                            <img src={react} alt="React.js Logo"></img>
                            <img src={typescript} alt="React.js Logo"></img>
                        </div>
                    </div>

                    <div className="highlight-item">
                        <div className="icon-highlight">
                            <Design sx={{ fontSize: 45 }}/>
                            <div>
                                <p>Design Tools</p>
                                <li>Skilled in visual design and prototyping.</li>
                            </div>
                        </div>
                        <div className="logos">
                            <img src={figma} alt="Figma Logo"></img>
                            <img src={canva} alt="Canva Logo"></img>
                        </div>
                    </div>
                </div>

                <h4>Languages</h4>

                <div className="languages-section">
                    <div className="language">
                        <h1>Filipino</h1>
                    </div>

                    <div className="language">
                        <h1>English</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main;