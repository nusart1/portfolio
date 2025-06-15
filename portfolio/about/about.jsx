import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import '../about/about.css';
import ProfileImage from '../../assetts/nusratillo.jpg';

function About({ data }) {
  if (!data) return <div>Yuklanmoqda...</div>;

  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-heading">{data.about}</h2>

        <p className="about-description">{data.tavsif2}</p>

        <div className="skills">
          <h3 className="skills-headingg">{data.skills}</h3>
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
