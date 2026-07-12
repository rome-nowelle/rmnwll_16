import { useEffect } from 'react';

// Styles
import './styles/resume.css';

// Components
import LeftSection from './LeftSection';

// Icons
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import HonorsIcon from '@mui/icons-material/MilitaryTech';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import OrganizationIcon from '@mui/icons-material/CardMembership';

const Resume = () => {
    useEffect(() => {
        document.title = "Rmnwll_ - Resume"
    }, []);

    const education = [
        {
            title: "Polytechnic University of the Philippines",
            school_year: "2021 - 2025",
            address: "Sta. Mesa, Manila",
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
            title: "Benedictine Institute of Learning",
            school_year: "2019 - 2021",
            course: "Science, Technology, Engineering and Mathematics",
            address: "Imus, Cavite",
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

                        {/* Experience */}
                        <div className="header-section">
                            <h3>Experience</h3>
                            <hr />
                        </div>

                        <div className="experience">
                            <div className="ex-header">
                                <div className="ex-title">
                                    <WorkOutlineOutlinedIcon sx={{ fontSize: 16, marginRight: '5px', marginTop: '3px', color: '#fece35' }} />
                                    <h4>Department of Labor and Employment (DOLE) - Central Office</h4>
                                </div>
                                <span>June 2026 - Present</span>
                            </div>
                            <p>DOLE Building, Muralla Wing cor. General Luna St., Intramuros, Manila</p>
                            <div className="position">
                                <h4>Financial and Management Service (Budget Division - GIP) - Government Intern</h4>
                            </div>
                            <div className="details">
                                <ul>
                                    <li>Assisted the Financial and Management Service under the Budget Division by systematically scanning documents, encoding data into monitoring log sheets, managing document workflows, maintaining secure server and OneDrive backups, and providing technical hardware support.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="experience">
                            <div className="ex-header">
                                <div className="ex-title">
                                    <WorkOutlineOutlinedIcon sx={{ fontSize: 16, marginRight: '5px', marginTop: '3px', color: '#fece35' }} />
                                    <h4>SMESoft Inc.</h4>
                                </div>
                                <span>March 2025 to June 2025</span>
                            </div>
                            <p>Ayala Ave., Makati City, Metro Manila</p>
                            <div className="position">
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

                        {/* Educational Attainment */}
                        <div className="header-section">
                            <h3>Educational Attainment</h3>
                            <hr />
                        </div>
                        {education.map((edu, index) => (
                            <div className="education" key={index}>
                                <div className="edu-header">
                                    <div className="edu-title">
                                        <SchoolRoundedIcon sx={{ color: '#fece35' }} />
                                        <h4>{edu.title}</h4>
                                    </div>
                                    <span>{edu.school_year}</span>
                                </div>
                                <p>{edu.address}</p>
                                <div className="position">
                                    <h4>{edu.course}</h4>
                                </div>
                                <div className="honors">
                                    <HonorsIcon sx={{ color: '#fece35' }} />
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

                        {/* Eligibility */}
                        <div className="header-section">
                            <h3>Eligibility</h3>
                            <hr />
                        </div>
                        <div className="eligibility">
                            <div className="eligibility-header">
                                <div className="org-title">
                                    <WorkspacePremiumIcon sx={{ fontSize: 20, marginTop: '3px', color: '#fece35' }} />
                                    <h4>P.D No. 907 - Honor Graduate Eligibility (HGE)</h4>
                                </div>
                                <span>2025</span>
                            </div>
                            <p>Civil Service Commission</p>
                            <div className="position">
                                <h4>Certificate of Eligibility</h4>
                            </div>
                        </div>

                        {/* Organization */}
                        <div className="header-section">
                            <h3>Organization</h3>
                            <hr />
                        </div>

                        <div className="organization">
                            <div className="org-header">
                                <div className="org-title">
                                    <OrganizationIcon sx={{ fontSize: 20, marginTop: '3px', color: '#fece35' }} />
                                    <h4>Google Developer Groups (GDG) </h4>
                                </div>
                                <span>2024-2025</span>
                            </div>
                            <p>Polytechnic University of the Philippines</p>
                            <div className="position">
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