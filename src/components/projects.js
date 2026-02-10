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

const Project = () => {
    useEffect(() => {
        document.title = "Rmnwll_ - Projects"
    }, []);

    const projects = [
        { id: 1, title: 'Bigbrew', description: 'Course Project', category: 'Web Development', image: Bigbrew },
        { id: 2, title: 'JustiFile', description: 'Capstone Project', category: 'Web Development', image: JustifileWeb },
        { id: 3, title: 'Rmnwll_', description: 'Personal Project', category: 'Web Design', image: Eportfolio },
        { id: 4, title: 'JustiFile', description: 'Course Project', category: 'Web Design', image: JustifilePrototype },
    ];

    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="main-container">
            <div className="container">
                <div className="main">
                    {/* Left Section */}
                    <LeftSection />

                    {/* Right Section */}
                    <div className="right-section">
                        <h2>Projects</h2>

                        <div className="projects">
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
                                            fontSize: '15px',
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Project Cards */}
                            <div className="cards">

                                {filteredProjects.length === 0 ? (
                                    <p className='no-proj'>No projects found in this category</p>
                                ) : null}

                                {filteredProjects.map(project => (
                                    <div key={project.id} className="cardstyle">
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
        </div>
    );
}
export default Project;