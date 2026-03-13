import { useEffect } from 'react';

// Styles
import './styles/resume.css';

// Components
import LeftSection from './LeftSection';

// Icons
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

const Resume = () => {
    useEffect(() => {
        document.title = "Rmnwll_ - Resume"
    }, []);

    const education = [
        {
            title: "Polytechnic University of the Philippines - Main Campus",
            school_year: "2021 - 2025",
            course: "Bachelor of Science in Information Technology",
            status: "Validation of Completion",
            honors: "Magna Cum Laude",
            details: [
                "President’s Lister (2021–2025) - Maintained consistent academic excellence.",
                "Capstone Project - Online Barangay Incident Reporting & Management Tool.",
                "Internship Project - Appointment Scheduling System for veterinary and grooming services."
            ]
        },
        {
            title: "Benedictine Institute of Learning - Imus Cavite",
            school_year: "2019 - 2021",
            course: "Science, Technology, Engineering and Mathematics",
            honors: "High Honors",
            details: [
                "Web Development Experience - Basic experience in web development via Google Sites.",
                "Microsoft Office Proficiency - Improved skills in Microsoft Office applications.",
                "Organized Approach - Developed an organized and detail-oriented approach in school tasks and group work."
            ]
        }
    ];

    return (
        <div className="main-container resume-page">
            <div className="container">
                <div className="main">
                    {/* Left Section */}
                    <div className="resume-left">
                        <LeftSection />
                    </div>

                    {/* Right Section */}
                    <div className="right-section">
                        <h2>Resume</h2>

                        {/* Educational Attainment */}
                        <h3>Educational Attainment</h3>
                        {education.map((edu, index) => (
                            <div className="education" key={index}>
                                <div className="edu-header">
                                    <div className="edu-title">
                                        <CircleRoundedIcon sx={{ fontSize: 10, marginRight: '5px', marginTop: '6px' }} />

                                        <h4>{edu.title}</h4>
                                    </div>
                                    <span>{edu.school_year}</span>
                                </div>
                                <p>{edu.course}</p>
                                <div className="honors">
                                    <SchoolRoundedIcon />
                                    <h4>{edu.honors}</h4>
                                </div>
                                <div className="details">
                                    <ul>
                                        <li>{edu.details[0]}</li>
                                        <li>{edu.details[1]}</li>
                                        <li>{edu.details[2]}</li>
                                    </ul>
                                </div>
                            </div>))}

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
                                <SquareRoundedIcon sx={{ fontSize: 7, marginRight: '5px', marginTop: '5px' }} />
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
                        <div className="eligibility">
                            <div className="org-header">
                                <div className="org-title">
                                    <CircleRoundedIcon sx={{ fontSize: 10, marginRight: '5px', marginTop: '6px' }} />
                                    <h4>P.D No. 907 - Honor Graduate Eligibility (HGE)</h4>
                                </div>
                                <span>2025</span>
                            </div>
                            <p>Civil Service Commission</p>
                            <div className="position">
                                <SquareRoundedIcon sx={{ fontSize: 7, marginRight: '5px', marginTop: '5px' }} />
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
                                <SquareRoundedIcon sx={{ fontSize: 7, marginRight: '5px', marginTop: '5px' }} />
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