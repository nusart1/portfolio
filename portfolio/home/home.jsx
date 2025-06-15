import React, { useState, useEffect } from 'react';
import '../home/home.css';
import Img from '../../assetts/nusratillo.jpg';
import { FaReact, FaJsSquare, FaFigma } from 'react-icons/fa';

function Home({ data }) {
  const [background, setBackground] = useState(false);
  const openGitHub = () => {
    window.location.href = 'https://github.com'; // o'zingizning GitHub linkingizni yozing
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div>Yuklanmoqda...</div>; // 👈 Xatolikni oldini oladi

  return (
 
     
       <section className={`hero ${background ? 'active' : ''}`}>
      <div className="hero-content">
        <h1 className="animated-text">
          {data.salomlashuv}
        </h1>
        <h2 className="subheading typing-effect">
          {data.kasb}
        </h2>
        <p className="description">
          {data.tavsif}
        </p>

        <div className="skills-icons">
          <FaReact className="skill-icon react" />
          <FaJsSquare className="skill-icon js" />
          <FaFigma className="skill-icon figma" />
        </div>

        <div className="hero-buttons">
          <button className="github-button" onClick={openGitHub}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
          className="github-icon"
        >
          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.2 3.1.9.1-.6.3-1.2.6-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 5.4 18 5.7 18 5.7c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.7.9.7 1.8v2.7c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
        </svg> */}
        GitHub profilim
      </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={Img} alt="Developer Avatar" className="avatar" />
      </div>
    </section>
   
    
  );
}

export default Home;
