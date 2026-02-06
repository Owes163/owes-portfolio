import React, { useState, useEffect } from 'react';
import './Styles/Navbar.css';
import ResumeFile from '../assets/Owes Resume.pdf';
import OSLogo from '../assets/OS.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`nav-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo">
          <a href="#home" title="Go to Home">
            <img src={OSLogo} alt="Owes Shaikh Logo" className="nav-logo" />
          </a>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${mobileMenu ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={() => setMobileMenu(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <a
            href={ResumeFile}
            download="Owes Shaikh Resume.pdf"
            className="resume-btn"
          >
            Resume
          </a>

          <div
            className="hamburger"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <div className={mobileMenu ? 'bar anim' : 'bar'}></div>
            <div className={mobileMenu ? 'bar anim' : 'bar'}></div>
            <div className={mobileMenu ? 'bar anim' : 'bar'}></div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
