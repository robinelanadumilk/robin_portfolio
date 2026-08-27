import React from 'react';
import { Code2, Cpu, Database, Layers, CheckCircle2, Zap } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './About.css';

const HighlightCard = ({ item }) => {
  const tiltRef = use3DTilt({ max: 14, perspective: 900, scale: 1.03 });

  return (
    <div ref={tiltRef} className="highlight-card glass-panel card-3d jarvis-card hud-corner-brackets">
      <div className="card-top-tag">{item.tag}</div>
      <div className="hl-icon-box hl-icon-jarvis">{item.icon}</div>
      <h4 className="hl-title">{item.title}</h4>
      <p className="hl-desc">{item.desc}</p>
    </div>
  );
};

const About = () => {
  const bioRef = use3DTilt({ max: 8, perspective: 1400, scale: 1.01 });

  const highlights = [
    {
      tag: "STARK_MODULE: 0x01",
      icon: <Code2 size={24} className="hl-icon" />,
      title: "Django & Python Core",
      desc: "Architecting high-throughput backend services, MVC controllers, and RESTful API endpoints with Python & DRF."
    },
    {
      tag: "STARK_MODULE: 0x02",
      icon: <Database size={24} className="hl-icon" />,
      title: "MSSQL & Schema Engineering",
      desc: "Optimizing relational database engines, stored procedures, triggers, execution plans, and complex transactional queries."
    },
    {
      tag: "STARK_MODULE: 0x03",
      icon: <Cpu size={24} className="hl-icon" />,
      title: "Full-Stack UI Architecture",
      desc: "Developing responsive frontend architectures with React.js, JavaScript (ES6+), and seamless Flutter API integration."
    },
    {
      tag: "STARK_MODULE: 0x04",
      icon: <Layers size={24} className="hl-icon" />,
      title: "Automated Document Engines",
      desc: "Generating business-critical enterprise reports in PDF (ReportLab) and Excel (OpenPyXL) with automated pipelines."
    }
  ];

  const stats = [
    { value: "03+", label: "Years Operational Experience" },
    { value: "06+", label: "Live Production Systems" },
    { value: "06", label: "Verified Certifications" },
    { value: "MCA", label: "Master of Computer Applications" }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <Zap size={14} /> J.A.R.V.I.S. // ARCHITECTURAL DOSSIER
          </div>
          <h2 className="section-title">
            Engineering High-Impact <span className="gradient-text">Enterprise Solutions</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Main Bio Terminal Panel */}
          <div ref={bioRef} className="about-bio-card glass-panel card-3d jarvis-bio-panel hud-corner-brackets">
            <div className="terminal-panel-header jarvis-panel-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-panel-title">developer_specification.dossier</span>
            </div>

            <div className="bio-inner-pad">
              <div className="bio-header-badge">
                <Zap size={13} className="jarvis-pulse-dot" />
                <span>STATUS: ACTIVE • PYTHON_DJANGO_SPECIALIST</span>
              </div>

              <h3 className="bio-title">
                <span className="jarvis-cyan-icon">&gt;</span> Identity: Robin Roy
              </h3>

              <p className="bio-paragraph">
                An enthusiastic Jr. Python Full Stack Developer equipped to construct, scale, and maintain mission-critical web applications. Equipped with deep knowledge of Python and Django to engineer resilient architectures, collaborate across interdisciplinary teams, and deliver robust software.
              </p>
              <p className="bio-paragraph">
                Experienced in building secure RESTful APIs while adapting agile methodologies to ship on schedule. Dedicated to continuous performance profiling, database query optimization, and rigorous code review culture.
              </p>

              <div className="key-points">
                <div className="point-item point-item-jarvis">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>[BACKEND] Python 3.x, Django Framework &amp; DRF</span>
                </div>
                <div className="point-item point-item-jarvis">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>[DATABASE] Microsoft SQL Server (MSSQL) &amp; MySQL</span>
                </div>
                <div className="point-item point-item-jarvis">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>[FRONTEND] React.js, Modern JavaScript, HTML5 &amp; CSS3</span>
                </div>
                <div className="point-item point-item-jarvis">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>[PIPELINE] ReportLab (PDF Generation) &amp; OpenPyXL (Excel)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="about-highlights-grid">
            {highlights.map((item, idx) => (
              <HighlightCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* 3D Stark Stats Row */}
        <div className="stats-row glass-panel stats-jarvis hud-corner-brackets">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item stat-item-jarvis">
              <span className="stat-value jarvis-glow-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
