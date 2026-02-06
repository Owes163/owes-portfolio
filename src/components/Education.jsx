import React from "react";
import "./Styles/Education.css";

/* ===== LOGO IMPORTS ===== */
import UTULogo from "../assets/utu.png";
import HSCLogo from "../assets/hsc.png";
import SSCLogo from "../assets/ssc.png";
import DIPLOMAlogo from "../assets/diploma.png";


const Education = () => {
  const educationData = [
    {
      year: "August 2023 – Present",
      degree: "B.Tech – Computer Engineering",
      institution: "Uka Tarsadia University",
      description: "SGPA: 8.30 (Till Sem 8)",
      logo: UTULogo,
    },
     {
    year: "June 2021 – March 2023",
    degree: "Diploma in Computer Engineering",
    institution: "Maharashtra State Board of Technical Education, Mumbai  ",
    description: "Percentage: 85.34%",  
    logo: DIPLOMAlogo,
  },
    {
      year: "June 2019 – March 2021",
      degree: "HSC (Higher Secondary Certificate)",
      institution: "The N.D. & M.Y. and Sheth H.J.Shah Junior College",
      description: "Percentage: 60.00%",
      logo: HSCLogo,
    },
    {
      year: "June 2018 – March 2019",
      degree: "SSC (Secondary School Certificate)",
      institution: "The N.D. & M.Y. and Sheth H.J.Shah Junior College",
      description: "Percentage: 69.20%",
      logo: SSCLogo,
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h1 className="section-title">Education</h1>

        <div className="education-cards">
          {educationData.map((item, index) => (
            <div className="edu-card" key={index}>
              <div className="card-glass-effect"></div>

              {/* LOGO */}
              <div className="edu-logo-container">
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="edu-logo-img"
                />
              </div>

              {/* CONTENT */}
              <div className="card-content">
                <span className="edu-year">{item.year}</span>
                <h3 className="edu-degree">{item.degree}</h3>
                <h4 className="edu-institution">{item.institution}</h4>
                <p className="edu-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
  