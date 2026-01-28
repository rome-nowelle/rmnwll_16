import React from "react";
import { useEffect } from "react";

//Styles;
import "./styles/contact.css";

// Images
import Logo from "../assets/logo.png";
import QRCode from "../assets/SANARES_Resume.png";

// Icons
import SendRoundedIcon from '@mui/icons-material/SendRounded';

// Components
import LeftSection from "./LeftSection";

const Contact = () => {
    useEffect(() => {
        document.title = "Rmnwll_ - Contact"
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
                    <h2>Contact</h2>

                    {/* Google Map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61831.464739790455!2d120.93719259999999!3d14.400248000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d252b84f3c11%3A0x38b0f2e1f833e8df!2sImus%2C%20Cavite!5e0!3m2!1sen!2sph!4v1759739620462!5m2!1sen!2sph"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="mapa"
                        title="Imus Cavite Map" />

                    {/* Contact Form */}
                    <h3>Contact Form</h3>

                    <div className="contact-container">
                        <div className="contact-form">
                            <form id="contactForm" action="" method="post">
                                <div className="input-group">
                                    <div className="input-field">
                                        <label for="name">Full Name</label>
                                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                                    </div>

                                    <div className="input-field">
                                        <label for="email">Email Address</label>
                                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                                    </div>
                                </div>

                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Your Message" className="textheight"
                                    required></textarea>

                                <div className="submit">
                                    <p>“Thank you for visiting my portfolio. Looking forward to connecting with you!”</p>
                                    <button type="submit" className="send-btn">
                                        <SendRoundedIcon />
                                        <span>Send</span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="right-info">
                            <div className="qr-code">
                                <div className="img-qr">
                                    <img src={QRCode} alt="QR code of my resume" />
                                </div>
                                <h4>my Resume</h4>
                            </div>

                            <div className="logo-contact">
                                <img src={Logo} alt="Rmnwll_" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;