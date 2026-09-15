import React, { useState, useEffect } from 'react';
import { Mail, Phone, Code2, Database, Cpu, ArrowUpRight, FileText, Layers, Globe } from 'lucide-react';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import use3DTilt from '../utils/use3DTilt';
import './Hero.css';

const roles = [
  "Web Developer",
  "Python Django Developer",
  "RESTful API Specialist",
  "Full Stack Engineer"
];

const Hero = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const statCardRef = use3DTilt({ max: 12, perspective: 800, scale: 1.03 });

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
      <div className="hero-availability" aria-hidden="true">Open to remote & hybrid roles</div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge badge-jarvis">
            <span className="status-indicator-dot online"></span>
            <span>Web Developer · Thrissur, Kerala</span>
          </div>

          <h1 className="hero-title">
            Robin <em>Roy</em>
          </h1>

          <div className="hero-role-wrapper">
            <span className="jarvis-cli-prompt">Currently</span>
            <span className="role-dynamic">{displayText}</span>
            <span className="cursor-block">|</span>
          </div>

          <p className="hero-description">
            Web Developer with 2+ years building and maintaining production web applications and REST APIs
            with Python and Django, plus JavaScript, React, MSSQL, and MySQL. I debug, optimize, and
            improve live systems — including legacy code — with a strong OOP and software-design foundation.
          </p>

          <div className="hero-tech-badges">
            <span className="hero-tech-pill tech-pill-jarvis"><Code2 size={13} /> Python &amp; Django</span>
            <span className="hero-tech-pill tech-pill-jarvis"><Layers size={13} /> REST APIs</span>
            <span className="hero-tech-pill tech-pill-jarvis"><Database size={13} /> MSSQL &amp; MySQL</span>
            <span className="hero-tech-pill tech-pill-jarvis"><Cpu size={13} /> React.js</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View selected work <ArrowUpRight size={16} />
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary">
              <FileText size={15} /> Resume
            </button>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={15} /> Contact
            </a>
          </div>

          <div className="social-links-wrapper">
            <span className="social-label">Direct</span>
            <div className="social-icons">
              <a href="mailto:robinroy1225@gmail.com" aria-label="Email" className="social-btn social-btn-jarvis" title="robinroy1225@gmail.com">
                <Mail size={16} />
              </a>
              <a href="tel:+919778004292" aria-label="Phone" className="social-btn social-btn-jarvis" title="+91 9778004292">
                <Phone size={16} />
              </a>
              <a href="https://linkedin.com/in/robinroy1225" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn social-btn-jarvis" title="linkedin.com/in/robinroy1225">
                <Globe size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-3d-model-free">
            <ThreeHeroCanvas />
          </div>

          <div ref={statCardRef} className="hero-floating-stat glass-panel tilt-card-3d jarvis-stat-badge">
            <div className="stat-icon-wrapper stat-jarvis-glow">
              <span>02+</span>
            </div>
            <div>
              <div className="stat-number">Years in production</div>
              <div className="stat-desc">Python · Django · React</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
