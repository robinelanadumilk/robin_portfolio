import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FileText } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = ({ activeSection, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="brand-logo">
          <div className="logo-icon-img-wrapper">
            <img src={logoImg} alt="Robin Roy Logo" className="brand-logo-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span className="brand-name">
            Robin <span className="dot">Roy</span>
          </span>
        </a>

        <nav className="desktop-nav">
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

        <div className="nav-actions">
          <button onClick={onOpenResume} className="btn btn-secondary nav-cv-btn">
            <FileText size={15} /> Resume CV
          </button>

          <a href="#contact" className="btn btn-primary nav-cta">
            <Sparkles size={16} /> Connect
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
              <FileText size={16} /> View / Download CV
            </button>
            <a
              href="#contact"
              className="btn btn-primary mobile-cta"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
