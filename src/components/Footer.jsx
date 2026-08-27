import React from 'react';
import { ArrowUp, Mail, Zap, Shield } from 'lucide-react';
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
                <span className="brand-name">
                  <span className="jarvis-prefix">J.A.R.V.I.S. // </span>ROBIN ROY
                </span>
                <span className="brand-status-sub">STARK AI ARCHITECTURE • PYTHON DJANGO</span>
              </div>
            </a>
            <p className="footer-bio">
              Constructing and maintaining high-throughput enterprise web architectures, RESTful API gateways, and scalable MSSQL ERP systems.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">// HUD_NAVIGATION</h4>
            <ul>
              <li><a href="#hero">&gt; [00] HOME / ARC CORE</a></li>
              <li><a href="#about">&gt; [01] BIOGRAPHICAL DOSSIER</a></li>
              <li><a href="#projects">&gt; [02] CLASSIFIED BLUEPRINTS</a></li>
              <li><a href="#skills">&gt; [03] COMPUTATIONAL ARSENAL</a></li>
              <li><a href="#experience">&gt; [04] MISSION TIMELINE</a></li>
              <li><a href="#contact">&gt; [05] QUANTUM COMMS</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h4 className="footer-heading">// COMMS_CHANNELS</h4>
            <div className="footer-social-icons">
              <a href="mailto:robinroy1225@gmail.com" className="social-btn social-btn-jarvis" aria-label="Email" title="robinroy1225@gmail.com">
                <Mail size={16} />
              </a>
              <a href="tel:8281189244" className="social-btn social-btn-jarvis" aria-label="Phone" title="+91 8281189244">
                <Zap size={16} />
              </a>
            </div>
            {onOpenResume && (
              <button onClick={onOpenResume} className="btn btn-secondary footer-dossier-btn">
                <Shield size={14} /> Decrypt Dossier (CV)
              </button>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Robin Roy // J.A.R.V.I.S. Mark-LXXXV Protocol [ARC REACTOR: 100% OPERATIONAL]
          </p>

          <button className="back-to-top back-to-top-jarvis" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} /> TOP_ORBIT
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
