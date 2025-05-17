import React from 'react';
import '../scils/scils.css';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 70 },
  { name: 'Node.js', level: 50 },
  
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="skill-level">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
