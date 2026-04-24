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
import figma from '../assets/img/Figma.png';
import canva from '../assets/img/Canva.png';
import php from '../assets/img/PHP.png';
import mysql from '../assets/img/MySQL.png';
import vsc from '../assets/img/vsc.png'
import github from '../assets/img/github.png';
import git from '../assets/img/Git.png';
import netlify from '../assets/img/netlify.png';
import xammpp from '../assets/img/XAMPP.png';
// import microsoft from '../assets/img/Microsoft.png'

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

    const certifications = [
        {
            title: "JavaScript Essentials 1",
            year: 2026,
            org: "Cisco Networking Academy | Institute Open Education & Development Group",
            status: "Statement of Achievement"
        },
        {
            title: "Network Addressing and Basic Troubleshooting",
            year: 2026,
            org: "Cisco Networking Academy",
            status: "Certificate of Course Completion"
        },
        {
            title: "Certified in Cybersecurity (CC) ISC2",
            year: 2024,
            org: "ISC2 Cyber Security",
            status: "Validation of Completion"
        }
    ];

    const frontendSkills = [
        { img: html, alt: "HTML5 Logo", level: 85 },
        { img: css, alt: "CSS Logo", level: 75 },
        { img: javascript, alt: "JavaScript Logo", level: 45 },
        { img: bootstrap, alt: "Bootstrap Logo", level: 35 },
        { img: react, alt: "React Logo", level: 30 }
    ];

    const backendSkills = [
        { img: php, alt: "PHP Logo", level: 20 },
        { img: mysql, alt: "MySQL Logo", level: 25 },
    ];

    const uiuxSkills = [
        { img: figma, alt: "Figma Logo", level: 70 },
        { img: canva, alt: "Canva Logo", level: 90 }
    ];

    const devtoolSkills = [
        { img: vsc, alt: "Visual Studio Code Logo" },
        { img: github, alt: "GitHub Logo" },
        { img: git, alt: "Git Logo" },
        { img: netlify, alt: "Netlify Logo" },
        { img: xammpp, alt: "XAMPP Logo" },
        // { img: microsoft, alt: "Microsoft Logo"}
    ];


    return (
        <div className="main-container skills-page">
            <div className="container">
                <div className="main">
                    {/* Left Section */}
                    <div className="skills-left">
                        <LeftSection />
                    </div>

                    {/* Right Section */}
                    <div className="right-section">
                        <h2>Skills</h2>

                        {/* Certification */}
                        <div className="header-section">
                            <h3>Certifications</h3>
                            <hr />
                        </div>

                        {certifications.map((certs, index) => (
                            <div className="certification" key={index}>
                                <div className="cert-header">
                                    <div className="cert-title">
                                        <CircleRoundedIcon sx={{ fontSize: 10, marginRight: '5px', marginTop: '6px', color: '#fece35' }} />
                                        <h4>{certs.title}</h4>
                                    </div>
                                    <span>{certs.year}</span>
                                </div>
                                <p>{certs.org}</p>
                                <div className="position">
                                    <h4>{certs.status}</h4>
                                </div>
                            </div>
                        ))}

                        <div className="tech-skills">
                            <div className="tech-skills_section">
                                <h3>Technical Skills</h3>
                                <hr />
                            </div>

                            {/* Frontend Skills */}
                            <div className="frontend">
                                <h4>Front-end</h4>

                                <div className="f-skills">
                                    {frontendSkills.map((skill, index) => (
                                        <div className="skill" key={index}>
                                            <img src={skill.img} alt={skill.alt} />
                                            <input type="range" min="0" max="100" value={skill.level} disabled />
                                            <span>{skill.level}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend & UI/UX Skills */}
                            <div className="backend-uiux">

                                {/* Backend Skills */}
                                <div className="backend">
                                    <h4>Back-end</h4>

                                    <div className="b-skills">
                                        {backendSkills.map((skill, index) => (
                                            <div className="skill" key={index}>
                                                <img src={skill.img} alt={skill.alt} />
                                                <input type="range" min="0" max="100" value={skill.level} disabled />
                                                <span>{skill.level}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ui/ux skills */}
                                <div className="uiux">
                                    <h4>UI/UX</h4>

                                    <div className="u-skills">
                                        {uiuxSkills.map((skill, index) => (
                                            <div className="skill" key={index}>
                                                <img src={skill.img} alt={skill.alt} />
                                                <input type="range" min="0" max="100" value={skill.level} disabled />
                                                <span>{skill.level}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="tools">
                                <h4>Development Tools</h4>

                                <div className="t-skills">
                                    {devtoolSkills.map((skill, index) => (
                                        <div className="skill" key={index}>
                                            <img src={skill.img} alt={skill.alt} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="other-skills">
                            <div className="my-skills">
                                <div className="other-skills_section">
                                    <h4>Soft Skills</h4>
                                    <hr />
                                </div>
                                <div className="o-skills">
                                    <div className="p-skills">
                                        <ul>
                                            <li>Problem-solving</li>
                                            <li>Adaptability</li>
                                            <li>Continuous Learning</li>
                                            <li>Detail-oriented</li>
                                            <li>Teamwork/Collaboration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="my-skills">
                                <div className="other-skills_section">
                                    <h4>Other Skills</h4>
                                    <hr />
                                </div>
                                <div className="o-skills">
                                    <div className="p-skills">
                                        <ul>
                                            <li>UI/UX Prototyping</li>
                                            <li>Responsive Web Design</li>
                                            <li>Cybersecurity Fundamentals</li>
                                            <li>Basic Troubleshooting</li>

                                        </ul>
                                    </div>
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
