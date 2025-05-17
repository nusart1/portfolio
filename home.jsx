import React, { useState, useEffect } from 'react';
import '../home/home.css';
import Img from '../../assetts/image.jpg';
import { FaReact, FaJsSquare, FaFigma } from 'react-icons/fa';

function Home() {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);  // Clean up interval
  }, []);

  return (
    <section className={`hero ${background ? 'active' : ''}`}>
      <div className="hero-content">
        <h1 className="animated-text">
          Salom, Men <span className="highlight">Nusratillo</span>
        </h1>
        <h2 className="subheading typing-effect">
          Frontend Dasturchi & UI/UX Dizayner
        </h2>
        <p className="description">
          React, HTML, CSS, JavaScript, va Figma yordamida kreativ, funksional va foydalanuvchiga qulay veb-ilovalar yarataman.
          Veb dizayn va interaktivlikni uyg‘unlashtirib ishlashni yoqtiraman.
        </p>

        <div className="skills-icons">
          <FaReact className="skill-icon react" />
          <FaJsSquare className="skill-icon js" />
          <FaFigma className="skill-icon figma" />
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">Loyihalarim</a>
          {/* <a href="#contact" className="btn secondary">Bog‘lanish</a> */}
        </div>
      </div>

      <div className="hero-image">
        <img src={Img} alt="Developer Avatar" className="avatar" />
      </div>
    </section>
  );
}

export default Home;
