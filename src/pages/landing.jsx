import './css/landing.css'
import bgImage from '../assets/webb.png';
import profileImage from '../assets/me.png'
import { useEffect, useRef, useState } from 'react';

function HomePage () {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
        <div className="container">
            <div
                ref={sectionRef}
                className={`intro-page ${isVisible ? 'bg-animate' : 'bg-paused'}`}
                id="top"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="intro-container">
                    <div className="text-box"> 
                        <h1 className="fade-in-left fade-delay-1">Hello, I'm Kay</h1>
                        <p className="fade-in-left fade-delay-2">SWE | Embedded Systems | AI</p>
                    </div>
                    <div className="profile-picture">
                        <img src={profileImage} alt="Profile" className="profile-picture fade-in fade-delay-2"/>
                    </div>
                </div>   
            </div>
        </div>       
        </> 
    )
}

export default HomePage