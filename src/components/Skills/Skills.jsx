import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", img: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Redux Toolkit", img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", img: "https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png" }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-36 border-bottom">
      <div id="Skills" className="wrapper text-center">
        <span className="sub-text overlay-text middle-ele" datatype="Skills">Skills</span>
        <h2 className="skills-title">
          My <span className="green-text">Tech Stack</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
