import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Code, Zap, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import ParticlesBg from './ParticlesBg';
import './Hero.css';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = ({ onOpenResume }) => {
  const roles = [
    "Full Stack Developer",
    "Python Backend Developer",
    "Django REST Framework Specialist",
    "React.js & Frontend Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === targetText) {
        setTimeout(() => setIsDeleting(true), 2000);
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
      <ParticlesBg />
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={14} className="badge-icon" />
            <span>Enterprise Web Apps & RESTful APIs</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Robin Roy</span> 👋
          </h1>

          <div className="hero-role-wrapper">
            <span className="role-prefix">I am a </span>
            <span className="role-dynamic">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            An enthusiastic Jr. Python Full Stack Developer ready to construct and maintain high-quality enterprise web applications, RESTful APIs, and scalable ERP systems using Python, Django, React.js, and MSSQL.
          </p>

          {/* Quick Core Tech Badges */}
          <div className="hero-tech-badges">
            <span className="hero-tech-pill">🐍 Python & Django</span>
            <span className="hero-tech-pill">⚡ REST APIs</span>
            <span className="hero-tech-pill">🗄️ MSSQL & MySQL</span>
            <span className="hero-tech-pill">⚛️ React.js</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Showcase <ArrowRight size={18} />
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary cv-btn">
              <Download size={18} /> View / Print CV
            </button>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="social-links-wrapper">
            <span className="social-label">Direct Contacts:</span>
            <div className="social-icons">
              <a href="mailto:robinroy1225@gmail.com" aria-label="Email" className="social-btn" title="robinroy1225@gmail.com">
                <Mail size={20} />
              </a>
              <a href="tel:8281189244" aria-label="Phone" className="social-btn" title="+91 8281189244">
                <Zap size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-logo-display glass-panel">
            <div className="logo-glow-ring"></div>
            <img src={logoImg} alt="Robin Roy Monogram Logo" className="hero-metallic-logo" />
          </div>

          <div className="code-card glass-panel floating-anim">
            <div className="code-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">RobinRoy_profile.py</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
<span className="keyword">class</span> <span className="function">PythonDjangoDeveloper</span>:<br/>
&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">__init__</span>(self):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="string">"Robin Roy"</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;self.role = <span className="string">"Python Django Full Stack Developer"</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;self.company = <span className="string">"Elanadu Milk Private Limited"</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;self.stack = [<span className="string">"Python"</span>, <span className="string">"Django"</span>, <span className="string">"DRF"</span>, <span className="string">"MSSQL"</span>, <span className="string">"React"</span>]<br/><br/>
&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">build_solutions</span>(self):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"Delivering high-performance enterprise ERPs"</span><br/><br/>
<span className="function">dev</span> = PythonDjangoDeveloper()<br/>
<span className="method">print</span>(dev.build_solutions())
                </code>
              </pre>
            </div>
          </div>

          {/* Quick Floating Metric Badge */}
          <div className="hero-floating-stat glass-panel">
            <div className="stat-icon-wrapper">
              <ShieldCheck size={24} className="stat-icon" />
            </div>
            <div>
              <div className="stat-number">3+ Years</div>
              <div className="stat-desc">Enterprise Full Stack & Backend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
