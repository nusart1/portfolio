import React from 'react';
import '../scils/scils.css';

const Skills = ({ data }) => {
  if (!data) return <div>Yuklanmoqda...</div>;

  return (
    <section className="skills">
      <h2 className="skills-head">{data.skills}</h2>
      <div className="skills-list">
        {data.skillsList && data.skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level || 80}%` }} 
              ></div>
            </div>
            <p className="skill-level">{skill.level || 80}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
