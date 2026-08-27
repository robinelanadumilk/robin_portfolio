import React, { useState, useEffect } from 'react';
import { Mail, Zap, Shield, Code2, Database, Cpu, ChevronRight, FileText } from 'lucide-react';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import use3DTilt from '../utils/use3DTilt';
import './Hero.css';

const roles = [
  "Python_Django_Backend_Engineer",
  "Enterprise_ERP_System_Architect",
  "RESTful_API_Specialist",
  "Full_Stack_Web_Engineer"
];

const Hero = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const statCardRef = use3DTilt({ max: 14, perspective: 800, scale: 1.05 });

  useEffect(() => {
    const targetText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === targetText) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? targetText.substring(0, displayText.length - 1)
            : targetText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-arc-glow-bg"></div>

      <div className="container hero-container">
        {/* Left Column: Stark HUD Command Terminal */}
        <div className="hero-content">
          <div className="hero-badge badge-jarvis">
            <Zap size={14} className="jarvis-icon pulse-anim" />
            <span>J.A.R.V.I.S. INTERFACE • PROTOCOL MARK-LXXXV ONLINE</span>
          </div>

          <h1 className="hero-title">
            <span className="jarvis-bracket">[</span>
            <span className="jarvis-name">Robin Roy</span>
            <span className="jarvis-bracket">]</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="jarvis-cli-prompt">DIRECTIVE // SPEC:</span>
            <span className="role-dynamic jarvis-glow-text">"{displayText}"</span>
            <span className="cursor-block">█</span>
          </div>

          <p className="hero-description">
            Enthusiastic Jr. Python Full Stack Developer specializing in architecting resilient backend systems, high-throughput RESTful APIs, and enterprise ERP applications using Python, Django, React.js, and MSSQL.
          </p>

          {/* Stark Tech Pills */}
          <div className="hero-tech-badges">
            <span className="hero-tech-pill tech-pill-jarvis"><Code2 size={13} /> Python &amp; Django</span>
            <span className="hero-tech-pill tech-pill-jarvis"><Zap size={13} /> Django REST APIs</span>
            <span className="hero-tech-pill tech-pill-jarvis"><Database size={13} /> MSSQL &amp; MySQL</span>
            <span className="hero-tech-pill tech-pill-jarvis"><Cpu size={13} /> React.js &amp; Three.js</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-jarvis">
              <ChevronRight size={17} /> ACCESS BLUEPRINTS
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary btn-jarvis">
              <FileText size={16} /> DECRYPT DOSSIER
            </button>
            <a href="#contact" className="btn btn-secondary btn-jarvis">
              <Mail size={16} /> TRANSMIT COMMS
            </a>
          </div>

          <div className="social-links-wrapper">
            <span className="social-label">// QUANTUM RELAY CHANNELS:</span>
            <div className="social-icons">
              <a href="mailto:robinroy1225@gmail.com" aria-label="Email" className="social-btn social-btn-jarvis" title="robinroy1225@gmail.com">
                <Mail size={18} />
              </a>
              <a href="tel:8281189244" aria-label="Phone" className="social-btn social-btn-jarvis" title="+91 8281189244">
                <Zap size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic Arc Reactor */}
        <div className="hero-visual">
          <div className="hero-3d-model-free">
            <ThreeHeroCanvas />
          </div>

          {/* 3D Floating Stark Telemetry Metric Badge */}
          <div ref={statCardRef} className="hero-floating-stat glass-panel tilt-card-3d jarvis-stat-badge hud-corner-brackets">
            <div className="stat-icon-wrapper stat-jarvis-glow">
              <Shield size={24} className="stat-icon" />
            </div>
            <div>
              <div className="stat-number jarvis-glow-text">3+ YEARS ARCHITECTURE</div>
              <div className="stat-desc">Python • Django REST • Enterprise ERP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
