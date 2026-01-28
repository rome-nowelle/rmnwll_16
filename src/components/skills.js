import React from "react";
import { useEffect } from "react";

// Styles
import "./styles/skills.css";

// Components
import LeftSection from "./LeftSection";

// Images
import html from '../assets/img/HTML5.png';
import css from '../assets/img/CSS.png';
import javascript from '../assets/img/JavaScript.png';
import bootstrap from '../assets/img/Bootstrap.png';
import react from '../assets/img/React.png';
import typescript from '../assets/img/Typescript.png';
import figma from '../assets/img/Figma.png';
import canva from '../assets/img/Canva.png';
import php from '../assets/img/PHP.png';
import mysql from '../assets/img/MySQL.png';
import vsc from '../assets/img/vsc.png'
import github from '../assets/img/github.png';
import git from '../assets/img/Git.png';
import xammpp from '../assets/img/XAMPP.png';
import microsoft from '../assets/img/Microsoft.png'

// Icons
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';


const Skills = () => {
    useEffect(() => {
        document.title = "Rmnwll_ - Skills"
    }, []);

    useEffect(() => {
        const updateRangeStyles = () => {
            document
                .querySelectorAll('.skill input[type="range"], .cont-skill input[type="range"]')
                .forEach(input => {
                    const value =
                        ((input.value - input.min) / (input.max - input.min)) * 100;

                    input.style.background = `
                        linear-gradient(
                            to right,
                            var(--hover-color) 0%,
                            var(--hover-color) ${value}%,
                            #ccc ${value}%,
                            #ccc 100%
                        )
                    `;
                });
        };

        updateRangeStyles();
    }, []);

    return (
        <div className="main-container">
            <div className="container">
                <div className="main">
                    {/* Left Section */}
                    <LeftSection />
                </div>

                {/* Right Section */}
                <div className="right-section">
                    <h2>Skills</h2>

                    {/* Certification */}
                    <h3>Certification</h3>

                    <div className="certification">
                        <div className="cert-header">
                            <div className="cert-title">
                                <CircleRoundedIcon sx={{ fontSize: 11, marginRight: '5px', marginTop: '6px' }} />
                                <h4>Certified in Cybersecurity (CC) ISC2</h4>
                            </div>
                            <span>2024</span>
                        </div>
                        <p>ISCP2 Cyber Security</p>
                        <div className="position">
                            <h4>Validation of Completion</h4>
                        </div>
                    </div>

                    <div className="tech-skills">
                        <h4>Technical Skills</h4>

                        {/* Frontend Skills */}
                        <div className="frontend">
                            <h4>Front-end</h4>

                            <div className="f-skills">
                                <div className="skill">
                                    <img src={html} alt="HTML5 Logo" />
                                    <input type="range" min="0" max="100" value="85" disabled />
                                    <span>85%</span>
                                </div>

                                <div className="skill">
                                    <img src={css} alt="CSS Logo"></img>
                                    <input type="range" min="0" max="100" value="75" disabled />
                                    <span>75%</span>
                                </div>

                                <div className="skill">
                                    <img src={javascript} alt="JavaScript Logo" />
                                    <input type="range" min="0" max="100" value="35" disabled />
                                    <span>35%</span>
                                </div>

                                <div className="skill">
                                    <img src={bootstrap} alt="Bootstrap Logo" />
                                    <input type="range" min="0" max="100" value="40" disabled />
                                    <span>40%</span>
                                </div>

                                <div class="skill">
                                    <img src={react} alt="React.js Logo" />
                                    <input type="range" min="0" max="100" value="15" disabled />
                                    <span>15%</span>
                                </div>

                                <div class="skill">
                                    <img src={typescript} alt="React.js Logo" />
                                    <input type="range" min="0" max="100" value="20" disabled />
                                    <span>20%</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Backend & UI/UX Skills --> */}
                        <div className="backend-uiux">

                            {/* Backend Skills */}
                            <div className="backend">
                                <h4>Back-end</h4>

                                <div className="b-skills">
                                    <div className="skill">
                                        <img src={php} alt="PHP Logo" />
                                        <input type="range" min="0" max="100" value="15" disabled />
                                        <span>15%</span>
                                    </div>

                                    <div class="skill">
                                        <img src={mysql} alt="mySQL Logo" />
                                        <input type="range" min="0" max="100" value="25" disabled />
                                        <span>25%</span>
                                    </div>
                                </div>
                            </div>

                            {/* ui/ux skills */}
                            <div className="uiux">
                                <h4>UI/UX</h4>

                                <div className="u-skills">
                                    <div className="skill">
                                        <img src={figma} alt="Figma Logo" />
                                        <input type="range" min="0" max="100" value="70" disabled />
                                        <span>70%</span>
                                    </div>

                                    <div className="skill">
                                        <img src={canva} alt="Canva Logo" />
                                        <input type="range" min="0" max="100" value="80" disabled />
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="tools">
                            <h4>Tools</h4>

                            <div className="t-skills">
                                <div className="skill">
                                    <img src={vsc} alt="Visual Studio Code (VSC)" />
                                </div>

                                <div class="skill">
                                    <img src={github} alt="GitHub" />
                                </div>

                                <div class="skill">
                                    <img src={git} alt="Git" />
                                </div>

                                <div class="skill">
                                    <img src={xammpp} alt="XAMPP" />
                                </div>

                                <div class="skill">
                                    <img src={microsoft} alt="Microsoft 365" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="other-skills">
                        <div className="my-skills">
                            <h4 className="other-text">Soft Skills</h4>
                            <div className="o-skills">
                                <div className="p-skills">
                                    <ul>
                                        <li>Problem-Solving</li>
                                        <li>Adaptability</li>
                                        <li>Continuous Learning</li>
                                        <li>Detail-oriented</li>
                                        <li>Teamwork/Collaboration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="my-skills">
                            <h4 className="other-text">Other Skills</h4>
                            <div className="o-skills">
                                <div className="p-skills">
                                    <ul>
                                        <li>Problem-Solving</li>
                                        <li>Adaptability</li>
                                        <li>Continuous Learning</li>
                                        <li>Detail-oriented</li>
                                        <li>Teamwork/Collaboration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
