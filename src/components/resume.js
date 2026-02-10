import { useEffect } from 'react';

// Styles
import './styles/resume.css';

// Components
import LeftSection from './LeftSection';

// Icons
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SeniorHigh from '@mui/icons-material/WorkspacePremiumRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

const Resume = () => {
    useEffect(() => {
        document.title = "Rmnwll_ - Resume"
    }, []);

    return (
        <div className="main-container">
            <div className="container">
                <div className="main">
                    {/* Left Section */}
                    <LeftSection />

                    {/* Right Section */}
                    <div className="right-section">
                        <h2>Resume</h2>

                        {/* Educational Attainment */}
                        <h3>Educational Attainment</h3>

                        <div className="education">
                            <div className="edu-header">
                                <div className="edu-title">
                                    <CircleRoundedIcon sx={{ fontSize: 10, marginRight: '5px', marginTop: '6px' }} />
                                    <h4>Polytechnic University of the Philippines - <span className="spannie">Main
                                        Campus</span></h4>
                                </div>
                                <span>2021 - 2025</span>
                            </div>
                            <p>Bachelor of Science in Information Technology (BSIT)</p>
                            <div className="honors">
                                <SchoolRoundedIcon />
                                <h4>Magna Cum Laude</h4>
                            </div>
                            <div className="details">
                                <ul>
                                    <li>President’s Lister (2021–2025) – Maintained consistent academic excellence.</li>
                                    <li>Capstone Project: Online Barangay Incident Reporting & Management Tool.</li>
                                    <li>Internship Project: Appointment Scheduling System for veterinary and grooming services.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="education">
                            <div className="edu-header">
                                <div className="edu-title">
                                    <CircleRoundedIcon sx={{ fontSize: 10, marginRight: '5px', marginTop: '6px' }} />
                                    <h4>Benedictine Institute of Learning - <span className="spannie">Imus Cavite</span>
                                    </h4>
                                </div>
                                <span>2019 - 2021</span>
                            </div>
                            <p>Science, Technology, Engineering and Mathematics (STEM)</p>
                            <div className="honors">
                                <SeniorHigh />
                                <h4>High Honors</h4>
                            </div>
                            <div className="details">
                                <ul>
                                    <li>Basic experience in web development via Google Sites, improved Microsoft Office, and
                                        early IT exploration.</li>
                                    <li>Developed an organized and detail-oriented approach in school tasks and group work.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Experience */}
                        <h3>Experience</h3>

                        <div className="experience">
                            <div className="ex-header">
                                <div className="ex-title">
                                    <CircleRoundedIcon sx={{ fontSize: 10, marginRight: '5px', marginTop: '6px' }} />
                                    <h4>SMESoft Inc.</h4>
                                </div>
                                <span>March 2025 to June 2025</span>
                            </div>
                            <p>Ayala Ave. Makati City, Cavite, Philippines</p>
                            <div className="position">
                                <SquareRoundedIcon sx={{ fontSize: 7, marginRight: '5px', marginTop: '5px' }}/>
                                <h4>Front-end Web Developer Intern</h4>
                            </div>
                            <div className="details">
                                <ul>
                                    <li>Designed and developed an appointment scheduling system that improved booking
                                        efficiency, enhanced navigation, aligned UI/UX with an existing platform, and supported
                                        coding, testing, and troubleshooting to ensure responsive design across devices.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Eligibility */}
                        <h3>Eligibility</h3>
                        <div class="eligibility">
                            <div className="org-header">
                                <div class="org-title">
                                    <CircleRoundedIcon sx={{ fontSize: 10, marginRight: '5px', marginTop: '6px' }} />
                                    <h4>P.D No. 907 - Honor Graduate Eligibility (HGE)</h4>
                                </div>
                                <span>2025</span>
                            </div>
                            <p>Civil Service Commission</p>
                            <div className="position">
                                <SquareRoundedIcon sx={{ fontSize: 7, marginRight: '5px', marginTop: '5px' }}/>
                                <h4>Certificate of Eligibility</h4>
                            </div>
                        </div>

                        {/* Organization */}
                        <h3>Organization</h3>

                        <div className="organization">
                            <div className="org-header">
                                <div className="org-title">
                                    <CircleRoundedIcon sx={{ fontSize: 10, marginRight: '5px', marginTop: '6px' }} />
                                    <h4>Google Developer Groups (GDG) </h4>
                                </div>
                                <span>2024-2025</span>
                            </div>
                            <p>Polytechnic University of the Philippines</p>
                            <div className="position">
                                <SquareRoundedIcon sx={{ fontSize: 7, marginRight: '5px', marginTop: '5px' }}/>
                                <h4>UI/UX Cadet</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Resume;