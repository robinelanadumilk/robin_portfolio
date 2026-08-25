import React from 'react';
import { ArrowUp, Mail, Terminal, Shield, Zap, Code2 } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer hacker-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="brand-logo">
              <div className="logo-icon-img-wrapper">
                <img src={logoImg} alt="Robin Roy Logo" className="brand-logo-img" />
              </div>
              <div className="brand-text-wrap">
                <span className="brand-name">
                  <span className="terminal-prefix">root@</span>robinroy<span className="terminal-suffix">:~$</span>
                </span>
                <span className="brand-status-sub">PYTHON_DJANGO_ENGINEER</span>
              </div>
            </a>
            <p className="footer-bio">
              Constructing and maintaining high-throughput enterprise web architectures, RESTful API gateways, and scalable MSSQL ERP systems.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">// SYSTEM_NAVIGATION</h4>
            <ul>
              <li><a href="#hero">&gt; ./home</a></li>
              <li><a href="#about">&gt; ./about</a></li>
              <li><a href="#projects">&gt; ./projects</a></li>
              <li><a href="#skills">&gt; ./skills</a></li>
              <li><a href="#experience">&gt; ./experience</a></li>
              <li><a href="#contact">&gt; ./contact</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h4 className="footer-heading">// SECURE_CHANNELS</h4>
            <div className="footer-social-icons">
              <a href="mailto:robinroy1225@gmail.com" className="social-btn social-btn-hacker" aria-label="Email" title="robinroy1225@gmail.com">
                <Mail size={16} />
              </a>
              <a href="tel:8281189244" className="social-btn social-btn-hacker" aria-label="Phone" title="+91 8281189244">
                <Zap size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Robin Roy // Engineered with Python &amp; React. [SYSTEM INTEGRITY: 100%]
          </p>

          <button className="back-to-top back-to-top-hacker" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} /> ^TOP
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
