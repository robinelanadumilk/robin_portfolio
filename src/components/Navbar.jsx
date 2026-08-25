import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileCode, ShieldAlert, Download, Sparkles } from 'lucide-react';
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
    { name: './about', href: '#about' },
    { name: './projects', href: '#projects' },
    { name: './skills', href: '#skills' },
    { name: './experience', href: '#experience' },
    { name: './contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="brand-logo">
          <div className="logo-icon-img-wrapper">
            <img src={logoImg} alt="Robin Roy Logo" className="brand-logo-img" />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-name">
              <span className="terminal-prefix">root@</span>robinroy<span className="terminal-suffix">:~$</span>
            </span>
            <span className="brand-status-sub">
              <span className="status-blink-dot"></span> DEV_STATION [ONLINE]
            </span>
          </div>
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
            <FileCode size={15} /> cat resume.pdf
          </button>

          <a href="#contact" className="btn btn-primary nav-cta">
            <Terminal size={15} /> ./connect
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
              <FileCode size={16} /> View / Download CV
            </button>
            <a
              href="#contact"
              className="btn btn-primary mobile-cta"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              ./execute_contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
