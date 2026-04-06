import { useState, useEffect } from 'react';

// Styles
import './styles/projects.css';

// Components
import LeftSection from './LeftSection';

// Images
import Eportfolio from '../assets/examples/portfolio.png';
import JustifileWeb from '../assets/examples/justifileweb.png';
import JustifilePrototype from '../assets/examples/justifileproto.png';
import Bigbrew from '../assets/examples/bigbrew.png';
import html from '../assets/img/HTML5.png';
import css from '../assets/img/CSS.png';
import javascript from '../assets/img/JavaScript.png';
// import bootstrap from '../assets/img/Bootstrap.png';
import react from '../assets/img/React.png';
import php from '../assets/img/PHP.png';
import mysql from '../assets/img/MySQL.png';
import figma from '../assets/img/Figma.png';
import github from '../assets/img/github.png';

// Webiste Logos
import justifileAdmin from '../assets/img/justifile-admin.png';
import justifileResident from '../assets/img/justifile-resident.png';
import rmnwll from '../assets/img/logo.png';
import bigbrew from '../assets/img/bigbrew.png';



const Project = () => {

    useEffect(() => {
        document.title = "Rmnwll_ - Projects"
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Bigbrew',
            paragraph: 'A web-based ordering system for Bigbrew milk tea shop that allows customers to browse the menu, place orders, and manage transactions digitally.',
            category: 'Web Development',
            description: 'Course Project',
            image: Bigbrew,
            tech: [
                { name: "HTML", icon: html },
                { name: "CSS", icon: css },
                { name: "JavaScript", icon: javascript },
                { name: "PHP", icon: php },
                { name: "MySQL", icon: mysql }
            ],
            links: [
                { name: "GitHub", icon: github, url: 'https://github.com/rome-nowelle/big-brew' },
                { name: "Live", icon: bigbrew, url: 'https://bigbrew-demo.vercel.app' }
            ]
        },
        {
            id: 2,
            title: 'JustiFile',
            paragraph: 'A document management system designed for organizing legal case files and documents efficiently for easier access and retrieval.',
            category: 'Web Development',
            description: 'Capstone Project',
            image: JustifileWeb,
            tech: [
                { name: "HTML", icon: html },
                { name: "CSS", icon: css },
                { name: "JavaScript", icon: javascript },
                { name: "PHP", icon: php },
                { name: "MySQL", icon: mysql }
            ],
            links: [
                // { name: "GitHub", icon: github, url: 'https://github.com/rome-nowelle/justifile' },
                { name: "Live", icon: justifileAdmin, url: 'https://notyetrelease' },
                { name: "Live", icon: justifileResident, url: 'https://notyetrelease' }
            ]
        },
        {
            id: 3,
            title: 'Rmnwll_',
            paragraph: 'My personal portfolio website showcasing my projects, resume, skills, and web development journey.',
            category: 'Web Development',
            description: 'Personal Project',
            image: Eportfolio,
            tech: [
                { name: "HTML", icon: html },
                { name: "CSS", icon: css },
                { name: "JavaScript", icon: javascript },
                { name: "React", icon: react }
            ],
            links: [
                { name: "GitHub", icon: github, url: 'https://github.com/rome-nowelle/rmnwll_16' },
                { name: "Live", icon: rmnwll, url: 'https://rmnwll.netlify.app/' }
            ]
        },
        {
            id: 4,
            title: 'JustiFile | Prototype',
            paragraph: 'A design prototype of the JustiFile system created during the early stage of development to visualize the UI and user workflow.',
            category: 'Web Design',
            description: 'Course Project',
            image: JustifilePrototype,
            tech: [
                { name: "Figma", icon: figma }
            ],
            links: []
        }
    ];

    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="main-container project-page">
            <div className="container">
                <div className="main">

                    {/* Left Section */}
                    <div className="projects-left">
                        <LeftSection />
                    </div>

                    {/* Right Section */}
                    <div className="right-section">
                        <h2>Projects</h2>

                        <div className="projects">

                            {/* Category Buttons */}
                            <div className='proj-cont'>
                                {['All', 'Web Design', 'Applications', 'Web Development'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        style={{
                                            color: activeCategory === cat ? '#cbc100' : 'white',
                                            cursor: 'pointer',
                                            border: 'none',
                                            background: 'transparent',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Project Cards */}
                            <div className="cards">

                                {filteredProjects.length === 0 && (
                                    <p className='no-proj'>No projects found in this category</p>
                                )}

                                {filteredProjects.map(project => (
                                    <div
                                        key={project.id}
                                        className="cardstyle"
                                        onClick={() => setSelectedProject(project)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img src={project.image} alt={project.title} />

                                        <div className="overlay">
                                            <h5>{project.title}</h5>
                                            <p>{project.description}</p>
                                        </div>

                                        <p>{project.category}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="modal-img"
                        />

                        <h3>{selectedProject.title}</h3>

                        <p className="modal-desc">
                            {selectedProject.paragraph}
                        </p>


                        <div className="modal-footer">
                            {/* LEFT SIDE */}
                            <div className="modal-links">
                                {selectedProject?.links?.map((link) => (
                                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                                        <img src={link.icon} alt={link.name} className="link-icon" />
                                    </a>
                                ))}
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="modal-tech">
                                {selectedProject.tech.map((tech, index) => (
                                    <img key={index} src={tech.icon} alt={tech.name} title={tech.name} className='tech-icon' />
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

export default Project;