import './css/aboutme.css';
import profilePic from '../assets/realme.jpeg'; // Make sure the image exists in this path

function AboutMe() {
    return (
        <div className="aboutme-section" id="aboutme">
            <h2 className="aboutme-title">About Me</h2>
            <div className="aboutme-content">
                <img src={profilePic} alt="Kayla Young" className="profile-pic" />
                <div className="aboutme-text">
                    <p>
                        Hi, I'm Kayla Young — a Computer Science graduate passionate about embedded systems and AI. 
                        I love building projects that blend hardware and software.
                    </p>
                    <div className="social-links">
                        <a href="https://github.com/KaylaRidesBikes" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/kayla-young-0153aa240/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
