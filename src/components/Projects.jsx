import React, { useState } from 'react';
import './Styles/Projects.css';

// Check your folder for these exact names:
import JobConnectImg from "../assets/images/jobconnect.png";
import SaveTheBunnyImg from "../assets/images/savethebunny.png";
import CosmicHeatImg from "../assets/images/cosmicheat.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
  {
    id: 1,
    title: "Job Connect – Full Stack MERN Application",
    duration: "January 2025 – March 2025",
    image: JobConnectImg,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN"],
    details: [
      "Developed a full-stack job portal using the MERN stack.",
      "Implemented user authentication, job posting, and application features.",
      "Designed responsive UI with React and managed backend APIs using Node.js and Express."
    ]
  },
  {
    id: 2,
    title: "Save the Bunny – Android Game Application",
    duration: "February 2025",
    image: SaveTheBunnyImg,
    skills: ["Android Studio", "Java", "Game Development"],
    details: [
      "Developed an Android game using Android Studio.",
      "Implemented obstacle-avoidance mechanics where the player saves the bunny.",
      "Designed interactive UI, score tracking, and smooth gameplay."
    ]
  },
  {
    id: 3,
    title: "Cosmic Heat – 2D Game using Python",
    duration: "December 2024",
    image: CosmicHeatImg,
    skills: ["Python", "Pygame", "Game Development"],
    details: [
      "Built a 2D arcade-style game using Python and Pygame.",
      "Implemented player movement, enemy mechanics, and collision detection.",
      "Focused on performance optimization and engaging gameplay experience."
    ]
  }
];


  const handleOpen = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Stop background scroll
  };

  const handleClose = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scroll
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => handleOpen(project)}>
              <div className="project-preview">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-skills-list">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {activeProject && (
        <div className="modal-backdrop" onClick={handleClose}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleClose}>&times;</button>
            <h2 className="modal-project-title">{activeProject.title}</h2>
            <p className="modal-project-date">{activeProject.duration}</p>
            <div className="modal-divider"></div>
            <ul className="modal-points">
              {activeProject.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="modal-footer">
              {activeProject.skills.map((s, i) => <span key={i} className="footer-tag">#{s}</span>)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;