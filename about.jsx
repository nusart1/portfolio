import React from 'react';
import '../about/about.css';
import ProfileImage from '../../assetts/image.jpg';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description">
          I am a passionate frontend developer and UI/UX designer with expertise in React, JavaScript, HTML, CSS, and Figma. 
          I love creating visually appealing and user-friendly web applications that deliver great user experiences. 
          My journey is driven by a desire to constantly learn and create innovative digital solutions.
        </p>

        <div className="skills">
          <h3 className="skills-heading">Skills & Technologies</h3>
          <div className="skills-icons">
            <FaReact className="skill-icon react" />
            <FaHtml5 className="skill-icon html" />
            <FaCss3Alt className="skill-icon css" />
            <FaJsSquare className="skill-icon js" />
          </div>
        </div>
      </div>

      <div className="about-image">
        <img src={ProfileImage} alt="Profile" className="profile-avatar" />
      </div>
    </section>
  );
}

export default About;
