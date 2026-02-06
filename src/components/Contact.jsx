import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'; // Ensure react-icons is installed
import './Styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="section-title">Get In Touch</h1>

        {/* About Me Box */}
        <div className="about-box-container">
          <div className="about-card">
            <span className="quote-icon quote-left">“</span>
            <p className="about-text">
              I’m <strong>Owes Shaikh,</strong> a passionate <strong>Computer Engineer</strong> and <strong>Software Developer</strong> focused on building clean, responsive, and user-friendly web interfaces. I work with <strong>React.js, JavaScript, HTML, CSS,</strong>and modern tools like <strong>Figma and Android Studio.</strong> I enjoy solving real-world problems, writing maintainable code, and continuously learning new technologies. I’m always open to collaborating on meaningful projects and creating impactful digital experiences.
            </p>
            <span className="quote-icon quote-right">”</span>
          </div>
        </div>

        {/* Updated Social Footer */}
        <div className="contact-footer">
          <div className="social-links">
            <a 
              href="mailto:ozzyshaikh163@gmail.com" 
              className="social-icon email"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://www.linkedin.com/in/owes-shaikh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://github.com/Owes163" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon github"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;