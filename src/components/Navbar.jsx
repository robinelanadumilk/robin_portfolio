import React, { useState, useEffect } from 'react';
import { X, Zap, FileText, Activity, Shield, Terminal, ChevronRight } from 'lucide-react';
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

  // Close menu on Escape key
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
    { num: '01', code: 'PROFILE', label: 'Identity & Bio Dossier', href: '#about' },
    { num: '02', code: 'BLUEPRINTS', label: 'Production Engineering & Systems', href: '#projects' },
    { num: '03', code: 'ARSENAL', label: 'Backend Stack & Capabilities', href: '#skills' },
    { num: '04', code: 'TIMELINE', label: 'Operational Deployment Log', href: '#experience' },
    { num: '05', code: 'COMMS', label: 'Quantum Transmission Terminal', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Identity */}
          <a href="#hero" className="brand-logo" onClick={() => setMenuOpen(false)}>
            <div className="logo-icon-img-wrapper jarvis-logo-wrap">
              <img src={logoImg} alt="Robin Roy Logo" className="brand-logo-img" />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-name">
                <span className="jarvis-prefix">STARK // </span>ROBIN ROY
              </span>
              <span className="brand-status-sub">
                <span className="status-indicator-dot online"></span>
                <span>SYSTEM ONLINE • V3.4</span>
              </span>
            </div>
          </a>

          {/* Nav Actions + Glowing J.A.R.V.I.S. Menu Toggle Button */}
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
              <FileText size={14} /> DOSSIER
            </button>

            <a href="#contact" className="btn btn-primary nav-cta">
              <Zap size={14} /> TRANSMIT
            </a>

            {/* Glowing J.A.R.V.I.S. Hamburger HUD Toggle */}
            <button
              className={`jarvis-hud-menu-btn ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation HUD"
              title="Toggle J.A.R.V.I.S. Navigation HUD"
            >
              <div className="hud-btn-inner">
                {menuOpen ? (
                  <X size={22} className="hud-x-icon" />
                ) : (
                  <div className="hud-burger-bars">
                    <span className="bar bar-1"></span>
                    <span className="bar bar-2"></span>
                    <span className="bar bar-3"></span>
                    <span className="hud-corner-dot"></span>
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Holographic J.A.R.V.I.S. Navigation Drawer Overlay */}
      {menuOpen && (
        <div className="hud-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="hud-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="hud-drawer-header">
              <div className="drawer-title-box">
                <Terminal size={18} className="jarvis-cyan-icon" />
                <span className="drawer-title">J.A.R.V.I.S. // NAVIGATION HUB</span>
              </div>
              <button
                className="drawer-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="drawer-telemetry-bar">
              <div className="drawer-stat">
                <Shield size={13} className="text-cyan" />
                <span>SEC LEVEL: ALPHA</span>
              </div>
              <div className="drawer-stat">
                <Activity size={13} className="text-gold" />
                <span>CORE: ONLINE</span>
              </div>
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
                      <span className="drawer-item-num">[{link.num}]</span>
                      <div className="drawer-item-text">
                        <span className="drawer-item-code">{link.code}</span>
                        <span className="drawer-item-desc">{link.label}</span>
                      </div>
                    </div>
                    <ChevronRight size={18} className="drawer-arrow-icon" />
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
                <FileText size={16} /> Decrypt Dossier (CV)
              </button>
              <a
                href="#contact"
                className="btn btn-primary drawer-action-btn"
                onClick={() => setMenuOpen(false)}
              >
                <Zap size={16} /> Open Quantum Comms
              </a>
            </div>

            <div className="drawer-bottom-telemetry">
              <span>SYSTEM: STARK_OS_V3.4</span>
              <span>DIRECTIVE: ACTIVE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
