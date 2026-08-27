import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, FileText } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = ({ activeSection, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '[01] PROFILE', href: '#about' },
    { name: '[02] BLUEPRINTS', href: '#projects' },
    { name: '[03] ARSENAL', href: '#skills' },
    { name: '[04] TIMELINE', href: '#experience' },
    { name: '[05] COMMS', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Stark Industries / Robin Roy Brand Identity */}
        <a href="#hero" className="brand-logo">
          <div className="logo-icon-img-wrapper jarvis-logo-wrap">
            <img src={logoImg} alt="Robin Roy Logo" className="brand-logo-img" />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-name">
              <span className="jarvis-prefix">J.A.R.V.I.S. // </span>ROBIN ROY
            </span>
            <span className="brand-status-sub">
              <span className="jarvis-pulse-dot"></span> STARK AI PROTOCOL [ONLINE • 99.8%]
            </span>
          </div>
        </a>

        {/* Desktop J.A.R.V.I.S. HUD Navigation Bar */}
        <nav className="desktop-nav jarvis-nav-dock">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Nav Actions with Audio Visualizer */}
        <div className="nav-actions">
          <div className="navbar-telemetry-pill">
            <div className="audio-visualizer-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="telemetry-txt">ARC: 100%</span>
          </div>

          <button onClick={onOpenResume} className="btn btn-secondary nav-cv-btn">
            <FileText size={15} /> DOSSIER (CV)
          </button>

          <a href="#contact" className="btn btn-primary nav-cta">
            <Zap size={15} /> TRANSMIT
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-secondary mobile-cv-btn"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              <FileText size={16} /> Access Classified Dossier (CV)
            </button>
            <a
              href="#contact"
              className="btn btn-primary mobile-cta"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Zap size={16} /> Transmit Quantum Comms
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
