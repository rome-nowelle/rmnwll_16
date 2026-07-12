import { useEffect } from "react";

// Styles
import "./styles/main.css";

//
import LeftSection from "./LeftSection";

// Images
import Pup from '../assets/img/Polytechnic University of the Philippines.png';
import html from '../assets/img/HTML5.png';
import css from '../assets/img/CSS.png';
import javascript from '../assets/img/JavaScript.png';
import bootstrap from '../assets/img/Bootstrap.png';
import react from '../assets/img/React.png';
import figma from '../assets/img/Figma.png';
import canva from '../assets/img/Canva.png';

// Icons
import Graduate from '@mui/icons-material/School';
import Codes from '@mui/icons-material/Code';
import Windows from '@mui/icons-material/ViewQuiltRounded';
import WebAsset from '@mui/icons-material/WebAsset';
import Design from '@mui/icons-material/ViewListRounded';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';

// Main Component
const Main = () => {
    useEffect(() => {
        document.title = "Rmnwll_ - Portfolio"
    }, []);

    return (
        <div className="main-container">
            <div className="container">
                <div className="main">
                    {/* Left Section */}
                    <LeftSection />


                    {/* Right Section */}
                    <div className="right-section">
                        <h2>About Me</h2>
                        <p className="qoute">“Creating modern, responsive, and user-friendly web experiences while optimizing digital data and workflows in public service.”</p>
                        <p className="description"> I’m Rome Nowelle R. Sanares, a BS Information Technology graduate, Magna Cum Laude, from the Polytechnic University of the Philippines. With a strong foundation in Front-End Development and UI/UX design, I am passionate about turning ideas into clean, functional, and responsive websites. Currently gaining professional experience in data and workflow management, I look forward to contributing my technical skills and creativity to a collaborative development team.</p>

                        <div className="text-margin">
                            <h4>What I'm Doing</h4>
                        </div>

                        <div className="what-i-do-section">
                            <div className="what-i-do">
                                <Windows sx={{ fontSize: 45 }} />
                                <div className="info-two">
                                    <span>Web Design</span>
                                    <p>Designing simple, neat, and user-focused layouts that make websites easy to use.</p>
                                </div>
                            </div>

                            <div className="what-i-do">
                                <WebAsset sx={{ fontSize: 45 }} />
                                <div className="info-two">
                                    <span>Web Development</span>
                                    <p>Turning ideas into responsive websites that work smoothly on any device.</p>
                                </div>
                            </div>

                            <div className="what-i-do">
                                <DataThresholdingIcon sx={{ fontSize: 45 }} />
                                <div className="info-two">
                                    <span>Data Management</span>
                                    <p>Handling accurate data encoding, systematic document scanning, and secure file backups.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-margin">
                            <h4>Quick Highlights</h4>
                        </div>

                        <div className="highlights">
                            <div className="highlight-item">
                                <div className="icon-highlight">
                                    <Graduate sx={{ fontSize: 45 }} />
                                    <div>
                                        <p>BSIT, Polytechnic University of the Philippines — Magna Cum Laude</p>
                                        <ul>
                                            <li>Focus on Front-End Development, UI/UX Design & basic troubleshooting</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="logos">
                                    <img src={Pup} alt="PUP Manila"></img>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="icon-highlight">
                                    <Codes sx={{ fontSize: 45 }} />
                                    <div>
                                        <p>Front-End Skills</p>
                                        <ul>
                                            <li>Focused on creating seamless web experiences through front-end technologies.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="logos">
                                    <img src={html} alt="HTML5 Logo"></img>
                                    <img src={css} alt="CSS Logo"></img>
                                    <img src={javascript} alt="JavaScript Logo"></img>
                                    <img src={bootstrap} alt="Bootstrap Logo"></img>
                                    <img src={react} alt="React.js Logo"></img>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="icon-highlight">
                                    <Design sx={{ fontSize: 45 }} />
                                    <div>
                                        <p>Design Tools</p>
                                        <ul>
                                            <li>Skilled in visual design and prototyping.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="logos">
                                    <img src={figma} alt="Figma Logo"></img>
                                    <img src={canva} alt="Canva Logo"></img>
                                </div>
                            </div>
                        </div>
                        <div className="text-margin">
                            <h4>Languages</h4>
                        </div>

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
        </div>
    )
}

export default Main;