import React from 'react';
import { Terminal, Award, Code2, Cpu, Database, Layers, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './About.css';

const HighlightCard = ({ item }) => {
  const tiltRef = use3DTilt({ max: 14, perspective: 900, scale: 1.03 });

  return (
    <div ref={tiltRef} className="highlight-card glass-panel card-3d hacker-card">
      <div className="card-top-tag">{item.tag}</div>
      <div className="hl-icon-box hl-icon-hacker">{item.icon}</div>
      <h4 className="hl-title">{item.title}</h4>
      <p className="hl-desc">{item.desc}</p>
    </div>
  );
};

const About = () => {
  const bioRef = use3DTilt({ max: 8, perspective: 1400, scale: 1.01 });

  const highlights = [
    {
      tag: "SYS_MODULE: 0x01",
      icon: <Code2 size={24} className="hl-icon" />,
      title: "Django & Python Core",
      desc: "Architecting high-throughput backend services, MVC controllers, and RESTful API endpoints with Python & DRF."
    },
    {
      tag: "SYS_MODULE: 0x02",
      icon: <Database size={24} className="hl-icon" />,
      title: "MSSQL & Schema Engineering",
      desc: "Optimizing relational database engines, stored procedures, triggers, execution plans, and complex transactional queries."
    },
    {
      tag: "SYS_MODULE: 0x03",
      icon: <Cpu size={24} className="hl-icon" />,
      title: "Full-Stack Integration",
      desc: "Developing responsive frontend architectures with React.js, JavaScript (ES6+), and seamless Flutter API integration."
    },
    {
      tag: "SYS_MODULE: 0x04",
      icon: <Layers size={24} className="hl-icon" />,
      title: "Automated Document Engines",
      desc: "Generating business-critical enterprise reports in PDF (ReportLab) and Excel (OpenPyXL) with automated pipelines."
    }
  ];

  const stats = [
    { value: "03+", label: "Years Professional Experience" },
    { value: "06+", label: "Live Production Systems" },
    { value: "06", label: "Technical Certifications" },
    { value: "MCA", label: "Master of Computer Applications" }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <Terminal size={14} /> $ cat /proc/developer_info
          </div>
          <h2 className="section-title">
            Engineering High-Impact <span className="gradient-text">Enterprise Solutions</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Main Bio Terminal Panel */}
          <div ref={bioRef} className="about-bio-card glass-panel card-3d hacker-bio-panel">
            <div className="terminal-panel-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-panel-title">profile_specification.json</span>
            </div>

            <div className="bio-header-badge">
              <Terminal size={13} /> STATUS: ACTIVE • PYTHON_DJANGO_SPECIALIST
            </div>

            <h3 className="bio-title">
              <span className="hacker-green-icon">&gt;</span> Whoami: Robin Roy
            </h3>

            <p className="bio-paragraph">
              An enthusiastic Jr. Python Full Stack Developer ready to construct and maintain high-quality web applications. Equipped with deep knowledge of Django and Python to design scalable architectures, collaborate across interdisciplinary teams, and deliver robust software.
            </p>
            <p className="bio-paragraph">
              Experienced in building RESTful APIs while adapting agile methodologies to ship on schedule. Dedicated to continuous performance profiling, database query optimization, and code review culture.
            </p>

            <div className="key-points">
              <div className="point-item point-item-hacker">
                <CheckCircle2 size={16} className="check-icon" />
                <span>[STACK] Python 3.x, Django Framework &amp; DRF</span>
              </div>
              <div className="point-item point-item-hacker">
                <CheckCircle2 size={16} className="check-icon" />
                <span>[DB] Microsoft SQL Server (MSSQL) &amp; MySQL</span>
              </div>
              <div className="point-item point-item-hacker">
                <CheckCircle2 size={16} className="check-icon" />
                <span>[UI] React.js, Modern JavaScript, HTML5 &amp; CSS3</span>
              </div>
              <div className="point-item point-item-hacker">
                <CheckCircle2 size={16} className="check-icon" />
                <span>[DOC] ReportLab (PDF Generation) &amp; OpenPyXL (Excel)</span>
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

        {/* 3D Hacker Stats Row */}
        <div className="stats-row glass-panel stats-hacker">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item stat-item-hacker">
              <span className="stat-value hacker-glow-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
