// Assets
import profilePic from '../assets/img/profile-pic.jpg'; 

// Icons
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

// LeftSection Component
const LeftSection = () => {
    return (
        <div className="left-section">
            <img src={profilePic} alt="Rmnwll_" className="profile-pic" />

            <div className="personal-info">
                <h2>Rome Nowelle R. Sanares</h2>
                <p>BSIT Graduate</p>
            </div>

            <hr />

            <div className="contact-info">
                <ul>
                    <li>
                        <EmailRoundedIcon sx={{ fontSize: 25 }} />
                        <div className="info">
                            <span>Email</span>
                            <p>romenowellesanares@gmail.com</p>
                        </div>
                    </li>

                    <li>
                        <PhoneAndroidRoundedIcon sx={{ fontSize: 25 }} />
                        <div className="info">
                            <span>Contact Number</span>
                            <p>09954851594</p>
                        </div>
                    </li>

                    <li>
                        <LocationOnRoundedIcon sx={{ fontSize: 25 }} />
                        <div className="info">
                            <span>Location</span>
                            <p>Imus City, Cavite, Philippines</p>
                        </div>
                    </li>
                </ul>
            </div>

            
        </div>
    );
};

export default LeftSection;