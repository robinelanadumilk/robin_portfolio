import React from 'react';
import { ArrowUp, Mail, Phone, FileText, Globe } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import './Footer.css';

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer jarvis-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="brand-logo">
              <div className="logo-icon-img-wrapper jarvis-logo-wrap">
                <img src={logoImg} alt="Robin Roy Logo" className="brand-logo-img" />
              </div>
              <div className="brand-text-wrap">
                <span className="brand-name">Robin Roy</span>
                <span className="brand-status-sub">Web Developer · Thrissur</span>
              </div>
            </a>
            <p className="footer-bio">
              Web Developer with 2+ years building production Python/Django applications, REST APIs, and MSSQL-backed ERP systems.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Index</h4>
            <ul>
              <li><a href="#hero">Intro</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Career</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h4 className="footer-heading">Reach me</h4>
            <div className="footer-social-icons">
              <a href="mailto:robinroy1225@gmail.com" className="social-btn social-btn-jarvis" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href="tel:+919778004292" className="social-btn social-btn-jarvis" aria-label="Phone">
                <Phone size={16} />
              </a>
              <a href="https://linkedin.com/in/robinroy1225" target="_blank" rel="noreferrer" className="social-btn social-btn-jarvis" aria-label="LinkedIn">
                <Globe size={16} />
              </a>
            </div>
            {onOpenResume && (
              <button onClick={onOpenResume} className="btn btn-secondary footer-dossier-btn">
                <FileText size={14} /> Resume
              </button>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Robin Roy. Crafted with care in Kerala.
          </p>

          <button className="back-to-top back-to-top-jarvis" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} /> Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
