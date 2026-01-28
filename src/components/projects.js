import React from 'react';
import { useEffect } from 'react';

// Styles
import './styles/projects.css';

// Components
import LeftSection from './LeftSection';

const Project = () => {
    useEffect(() => {
        document.title = "Rmnwll_ - Projects"
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
                    <h2>Project</h2>

                    <div className="projects">
                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Project;