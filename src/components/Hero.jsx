import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Terminal, Shield, Zap, Code2, Database, Cpu, Lock, CheckCircle2, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import use3DTilt from '../utils/use3DTilt';
import './Hero.css';

const Hero = ({ onOpenResume }) => {
  const roles = [
    "Python_Django_Backend_Engineer",
    "RESTful_API_Architect",
    "Enterprise_ERP_System_Developer",
    "Full_Stack_Web_Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const statCardRef = use3DTilt({ max: 14, perspective: 800, scale: 1.05 });

  useEffect(() => {
    const targetText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

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
      <div className="hero-matrix-glow-bg"></div>

      <div className="container hero-container">
        {/* Left Column: Hacker Terminal Console */}
        <div className="hero-content">
          <div className="hero-badge badge-hacker">
            <Terminal size={14} className="hacker-icon pulse-anim" />
            <span>SYS_AUTH: ROOT_ACCESS_GRANTED • 0x7F</span>
          </div>

          <h1 className="hero-title">
            <span className="code-bracket">&lt;</span>
            <span className="hacker-name">Robin Roy</span>
            <span className="code-bracket"> /&gt;</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="terminal-cli-prompt">&gt; ./role --spec=</span>
            <span className="role-dynamic hacker-glow-text">"{displayText}"</span>
            <span className="cursor-block">█</span>
          </div>

          <p className="hero-description">
            Enthusiastic Jr. Python Full Stack Developer specializing in architecting resilient backend systems, high-throughput RESTful APIs, and enterprise ERP applications using Python, Django, React.js, and MSSQL.
          </p>

          {/* Hacker Terminal Tech Pills */}
          <div className="hero-tech-badges">
            <span className="hero-tech-pill tech-pill-hacker"><Code2 size={13} /> Python &amp; Django</span>
            <span className="hero-tech-pill tech-pill-hacker"><Zap size={13} /> Django REST API</span>
            <span className="hero-tech-pill tech-pill-hacker"><Database size={13} /> MSSQL &amp; MySQL</span>
            <span className="hero-tech-pill tech-pill-hacker"><Cpu size={13} /> React.js &amp; 3D</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-hacker">
              <ChevronRight size={17} /> ./view_projects.sh
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary btn-hacker">
              <Download size={16} /> cat cv_resume.pdf
            </button>
            <a href="#contact" className="btn btn-secondary btn-hacker">
              <Mail size={16} /> ./send_message
            </a>
          </div>

          <div className="social-links-wrapper">
            <span className="social-label">// DIRECT CHANNELS:</span>
            <div className="social-icons">
              <a href="mailto:robinroy1225@gmail.com" aria-label="Email" className="social-btn social-btn-hacker" title="robinroy1225@gmail.com">
                <Mail size={18} />
              </a>
              <a href="tel:8281189244" aria-label="Phone" className="social-btn social-btn-hacker" title="+91 8281189244">
                <Zap size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Free-Floating 3D Hologram */}
        <div className="hero-visual">
          <div className="hero-3d-model-free">
            <ThreeHeroCanvas />
          </div>

          {/* 3D Floating Cyber Metric Badge */}
          <div ref={statCardRef} className="hero-floating-stat glass-panel tilt-card-3d hacker-stat-badge">
            <div className="stat-icon-wrapper stat-hacker-glow">
              <Shield size={24} className="stat-icon" />
            </div>
            <div>
              <div className="stat-number hacker-glow-text">3+ YEARS CODING</div>
              <div className="stat-desc">Python • Django REST • ERP Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
