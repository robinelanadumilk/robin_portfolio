import React from 'react';
import { Code2, Cpu, Database, Layers, CheckCircle2 } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './About.css';

const HighlightCard = ({ item }) => {
  const tiltRef = use3DTilt({ max: 14, perspective: 900, scale: 1.03 });

  return (
    <div ref={tiltRef} className="highlight-card glass-panel card-3d jarvis-card">
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
      tag: "01",
      icon: <Code2 size={22} className="hl-icon" />,
      title: "Django & Python",
      desc: "High-throughput backend services, MVC architecture, and REST endpoints with Python and DRF."
    },
    {
      tag: "02",
      icon: <Database size={22} className="hl-icon" />,
      title: "MSSQL engineering",
      desc: "Relational schemas, stored procedures, triggers, execution plans, and complex transactional queries."
    },
    {
      tag: "03",
      icon: <Cpu size={22} className="hl-icon" />,
      title: "Full-stack interfaces",
      desc: "Responsive frontends with React, modern JavaScript, and Flutter API integration."
    },
    {
      tag: "04",
      icon: <Layers size={22} className="hl-icon" />,
      title: "Document engines",
      desc: "Business-critical PDF and Excel pipelines with ReportLab and OpenPyXL."
    }
  ];

  const stats = [
    { value: "02+", label: "Years in production" },
    { value: "06+", label: "Live systems" },
    { value: "06", label: "Certifications" },
    { value: "MCA", label: "Computer Applications" }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-num">01</span>
            <span className="section-rule"></span>
            <span className="section-kicker">About</span>
          </div>
          <h2 className="section-title">
            Engineering systems that hold up <span className="accent-italic">in production</span>
          </h2>
        </div>

        <div className="about-grid">
          <div ref={bioRef} className="about-bio-card glass-panel card-3d jarvis-bio-panel">
            <div className="bio-inner-pad">
              <div className="bio-header-badge">
                <span className="jarvis-pulse-dot"></span>
                <span>Web Developer</span>
              </div>

              <h3 className="bio-title">A brief on Robin</h3>

              <p className="bio-paragraph">
                Web Developer with 2+ years of professional experience building and maintaining production web applications and REST APIs using Python and Django, with additional work in JavaScript, React, MSSQL, and MySQL.
              </p>
              <p className="bio-paragraph">
                Strong foundation in object-oriented programming, data structures, and software design. Comfortable using AI coding assistants to move faster while reviewing generated code for correctness, security, and maintainability — and ready to train in ColdFusion as needed.
              </p>

              <div className="key-points">
                <div className="point-item point-item-jarvis">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Python 3.x, Django &amp; DRF</span>
                </div>
                <div className="point-item point-item-jarvis">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Microsoft SQL Server &amp; MySQL</span>
                </div>
                <div className="point-item point-item-jarvis">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>React, JavaScript, HTML5 &amp; CSS3</span>
                </div>
                <div className="point-item point-item-jarvis">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>OOP, data structures &amp; software design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-highlights-grid">
            {highlights.map((item, idx) => (
              <HighlightCard key={idx} item={item} />
            ))}
          </div>
        </div>

        <div className="stats-row glass-panel stats-jarvis">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item stat-item-jarvis">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
