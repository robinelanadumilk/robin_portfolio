import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Zap, ShieldCheck, Sparkles, Box, Code2, Database } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import ParticlesBg from './ParticlesBg';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import use3DTilt from '../utils/use3DTilt';
import './Hero.css';

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

  const codeCardRef = use3DTilt({ max: 12, perspective: 1200, scale: 1.02 });
  const logoCardRef = use3DTilt({ max: 14, perspective: 1000, scale: 1.04 });
  const statCardRef = use3DTilt({ max: 16, perspective: 800, scale: 1.05 });

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
      {/* 3D Ambient Glowing Mesh Background */}
      <div className="hero-3d-glow-bg"></div>

      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="hero-badge badge-3d">
            <Sparkles size={15} className="badge-icon pulse-anim" />
            <span>Enterprise Web Apps & 3D Interactive Architecture</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text hero-name-3d">Robin Roy</span> 👋
          </h1>

          <div className="hero-role-wrapper">
            <span className="role-prefix">I am a </span>
            <span className="role-dynamic">{displayText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            An enthusiastic Jr. Python Full Stack Developer ready to construct and maintain high-quality enterprise web applications, RESTful APIs, and scalable ERP systems using Python, Django, React.js, and MSSQL.
          </p>

          {/* Quick Core Tech Badges with 3D Pop */}
          <div className="hero-tech-badges">
            <span className="hero-tech-pill tech-pill-3d"><Code2 size={13} /> Python & Django</span>
            <span className="hero-tech-pill tech-pill-3d"><Zap size={13} /> REST APIs</span>
            <span className="hero-tech-pill tech-pill-3d"><Database size={13} /> MSSQL & MySQL</span>
            <span className="hero-tech-pill tech-pill-3d"><Box size={13} /> React.js & 3D UI</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-3d">
              View Showcase <ArrowRight size={18} />
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary cv-btn btn-3d">
              <Download size={18} /> View / Print CV
            </button>
            <a href="#contact" className="btn btn-secondary btn-3d">
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="social-links-wrapper">
            <span className="social-label">Direct Contacts:</span>
            <div className="social-icons">
              <a href="mailto:robinroy1225@gmail.com" aria-label="Email" className="social-btn social-btn-3d" title="robinroy1225@gmail.com">
                <Mail size={20} />
              </a>
              <a href="tel:8281189244" aria-label="Phone" className="social-btn social-btn-3d" title="+91 8281189244">
                <Zap size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Canvas & 3D Layered Cards */}
        <div className="hero-visual">
          {/* Interactive Three.js 3D Holographic Core */}
          <div className="hero-3d-model-wrapper">
            <ThreeHeroCanvas />
            <div className="model-helper-tag">
              <Box size={12} /> Interactive 3D Model • Move Mouse to Orbit
            </div>
          </div>

          {/* 3D Code Window with Perspective Tilt */}
          <div ref={codeCardRef} className="code-card glass-panel tilt-card-3d">
            <div className="code-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">RobinRoy_EnterpriseCore.py</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
<span className="keyword">class</span> <span className="function">RobinRoyEnterpriseDev</span>:<br/>
&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">__init__</span>(self):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="string">"Robin Roy"</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;self.stack = [<span className="string">"Python"</span>, <span className="string">"Django"</span>, <span className="string">"MSSQL"</span>, <span className="string">"React"</span>]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;self.status = <span className="string">"Ready for high-impact roles"</span><br/><br/>
&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">deliver_solution</span>(self):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"High-concurrency ERPs & 3D experiences"</span><br/><br/>
<span className="function">robin</span> = RobinRoyEnterpriseDev()<br/>
<span className="method">print</span>(robin.deliver_solution())
                </code>
              </pre>
            </div>
          </div>

          {/* 3D Floating Stat Badge */}
          <div ref={statCardRef} className="hero-floating-stat glass-panel tilt-card-3d">
            <div className="stat-icon-wrapper stat-3d-glow">
              <ShieldCheck size={26} className="stat-icon" />
            </div>
            <div>
              <div className="stat-number">3+ Years Experience</div>
              <div className="stat-desc">Enterprise Python, Django & REST APIs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
