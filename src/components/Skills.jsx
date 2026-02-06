import React from "react";
import "./Styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },

    {
      title: "Frameworks & Tools",
      skills: [
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    },

    {
      title: "Soft Skills",
      skills: [
        { name: "Quick Learner", icon: "⚡" },
        { name: "Communication", icon: "💬" },
        { name: "Teamwork", icon: "🤝" },
        { name: "Problem Solving", icon: "🧠" },
        { name: "Time Management", icon: "⏱️" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="section-title">Technical Skills</h1>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card">
              <h2 className="category-title">{category.title}</h2>

              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-icon-wrapper">
                      {skill.icon.startsWith("http") ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="skill-icon"
                        />
                      ) : (
                        <span className="skill-emoji">{skill.icon}</span>
                      )}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
