import './css/projects.css';
import ProjectCard from '../components/projectcard';
import project1Img from '../assets/epaper_display.webp';
import project2Img from '../assets/esp32_ap.webp';
import project3Img from '../assets/raspberrypi_car.webp';
import project4Img from '../assets/hospitaldb.webp';
import project5img from '../assets/bunny_window.gif';
import left_arrow from '../assets/left_arrow.png';
import right_arrow from '../assets/right_arrow.png';

import { useEffect, useRef } from 'react';

const projects = [
  {
    image: project2Img,
    title: 'ESP32 AP Lighting Control',
    description: 'Using ESP32 as a WiFi access point for remote control of LEDs.',
    date: 'June 2025',
    link: 'https://github.com/KaylaRidesBikes/esp32AP'
  },
  {
    image: project1Img,
    title: 'ESP32 Weather Display',
    description: 'Displays real-time weather and seismic data using OpenWeatherMap and USGS APIs.',
    date: 'March 2025',
    link: 'https://github.com/KaylaRidesBikes/esp32-weather-earthquake-epd'
  },
  {
    image: project3Img,
    title: 'Mini Self-Driving Car',
    description: 'Self-Driving Car powered by Raspberry Pi. Processed various sensor data to navigate a small course.',
    date: 'December 2024',
    link: 'https://github.com/CSC615-2024-Fall/csc615-term-project-jyrricho'
  },
  {
    image: project4Img,
    title: 'Hospital Management Database',
    description: 'Hospital Database Design and Implementation in SQL.',
    date: 'November 2024',
    link: 'https://github.com/sfsu-joseo/csc675-775-fa24-KaylaRidesBikes'
  },
  {
    image: project5img,
    title: 'In Progress...',
    description: '',
    date: '',
    link: ''
  },
];

function ProjectPage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          <img src={left_arrow} alt="Scroll left" className="scroll-icon" />
        </button>
        <div className="projects-container" ref={scrollRef}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              date={project.date}
              link={project.link}
            />
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>
          <img src={right_arrow} alt="Scroll right" className="scroll-icon" />
        </button>
      </div>
    </div>
  );
}

export default ProjectPage;
