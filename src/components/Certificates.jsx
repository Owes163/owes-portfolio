import React from "react";
import "./Styles/Certificates.css";

/* 1. Import PDFs (Open / Download) */
import Cert1PDF from "../assets/images/Certificate1.pdf";
import Cert2PDF from "../assets/images/Certificate2.pdf";
import Cert3PDF from "../assets/images/Certificate3.pdf";

/* 2. Import Preview Images */
import Cert1Img from "../assets/images/Machine_Learning.jpg";
import Cert2Img from "../assets/images/Capture_the_flag.jpg";
import Cert3Img from "../assets/images/Certificates.jpg";

const Certificates = () => {
  const certificateData = [
    {
      title: "Machine Learning Workshop",
      issuer: "Chhotubhai Gopalbhai Patel Institute of Technology (CGPIT)",
      date: "September 2024",
      image: Cert1Img,
      url: Cert1PDF,
    },
    {
      title: "SciClone 2K24 – Electromaze",
      issuer: "Uka Tarsadia University",
      date: "September 2024",
      image: Cert2Img,
      url: Cert2PDF,
    },
    {
      title: "National Digital Literacy Mission",
      issuer: "Government of India (NDLM)",
      date: "January 2016",
      image: Cert3Img,
      url: Cert3PDF,
    },
  ];

  return (
    <section id="certificates" className="cert-section">
      <div className="cert-container">
        <h1 className="section-title">Certificates</h1>

        <div className="cert-grid">
          {certificateData.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <div className="cert-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-img"
                />
                <div className="cert-overlay">
                  <span>View Certificate</span>
                </div>
              </div>

              <div className="cert-info">
                <span className="cert-date">{cert.date}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
