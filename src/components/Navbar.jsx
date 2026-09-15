import React, { useState, useEffect } from 'react';
import { X, FileText, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = ({ activeSection, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const navLinks = [
    { num: '01', code: 'About', label: 'Background & focus', href: '#about' },
    { num: '02', code: 'Work', label: 'Selected production systems', href: '#projects' },
    { num: '03', code: 'Skills', label: 'Stack & credentials', href: '#skills' },
    { num: '04', code: 'Career', label: 'Experience timeline', href: '#experience' },
    { num: '05', code: 'Contact', label: 'Start a conversation', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="brand-logo" onClick={() => setMenuOpen(false)}>
            <div className="logo-icon-img-wrapper jarvis-logo-wrap">
              <img src={logoImg} alt="Robin Roy Logo" className="brand-logo-img" />
            </div>
            <span className="brand-name">Robin Roy</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.num}
                  href={link.href}
                  className={`desktop-nav-link ${isActive ? 'active' : ''}`}
                >
                  <span className="desktop-nav-num">{link.num}</span>
                  {link.code}
                </a>
              );
            })}
          </nav>

          <div className="nav-actions">
            <button onClick={onOpenResume} className="btn btn-secondary nav-cv-btn">
              <FileText size={14} /> Resume
            </button>

            <a href="#contact" className="btn btn-primary nav-cta">
              Let’s talk <ArrowUpRight size={14} />
            </a>

            <button
              className={`jarvis-hud-menu-btn ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <div className="hud-btn-inner">
                {menuOpen ? (
                  <X size={20} className="hud-x-icon" />
                ) : (
                  <div className="hud-burger-bars">
                    <span className="bar bar-1"></span>
                    <span className="bar bar-2"></span>
                    <span className="bar bar-3"></span>
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="hud-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="hud-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="hud-drawer-header">
              <div className="drawer-title-box">
                <span className="drawer-title">Index</span>
              </div>
              <button
                className="drawer-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="drawer-nav-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.num}
                    href={link.href}
                    className={`drawer-nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="drawer-nav-left">
                      <span className="drawer-item-num">{link.num}</span>
                      <div className="drawer-item-text">
                        <span className="drawer-item-code">{link.code}</span>
                        <span className="drawer-item-desc">{link.label}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="drawer-arrow-icon" />
                  </a>
                );
              })}
            </nav>

            <div className="drawer-footer-actions">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenResume();
                }}
                className="btn btn-secondary drawer-action-btn"
              >
                <FileText size={16} /> View resume
              </button>
              <a
                href="#contact"
                className="btn btn-primary drawer-action-btn"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
