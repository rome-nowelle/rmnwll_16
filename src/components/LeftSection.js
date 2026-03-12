// Assets
import profilePic from "../assets/img/profile-pic.png";

// Icons
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

// LeftSection Component
const LeftSection = () => {

    const contacts = [
        {
            icon: <EmailRoundedIcon sx={{ fontSize: 25 }} aria-hidden="true" />,
            label: "Email",
            value: "romenowellesanares@gmail.com",
            link: "mailto:romenowellesanares@gmail.com"
        },
        {
            icon: <PhoneAndroidRoundedIcon sx={{ fontSize: 25 }} aria-hidden="true" />,
            label: "Contact Number",
            value: "09954851594",
            link: "tel:+639954851594"
        },
        {
            icon: <LocationOnRoundedIcon sx={{ fontSize: 25 }} aria-hidden="true" />,
            label: "Location",
            value: "Imus City, Cavite, Philippines"
        }
    ];

    return (
        <div className="left-section">

            <img
                src={profilePic}
                alt="Rome Nowelle R. Sanares"
                className="profile-pic"
                loading="lazy"
            />

            <div className="personal-info">
                <h2>Rome Nowelle R. Sanares</h2>
                <p>BSIT Graduate</p>
            </div>

            <hr />

            <div className="contact-info">
                <ul>
                    {contacts.map((item, index) => (
                        <li key={index}>
                            {item.icon}

                            <div className="info">
                                <span>{item.label}</span>
                                <p>
                                    {item.link ? (
                                        <a href={item.link}>
                                            {item.value}
                                        </a>
                                    ) : (
                                        item.value
                                    )}
                                </p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default LeftSection;