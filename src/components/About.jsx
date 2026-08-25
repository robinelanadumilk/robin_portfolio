import React from 'react';
import { User, Award, Code, Cpu, Database, Layers, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './About.css';

const HighlightCard = ({ item }) => {
  const tiltRef = use3DTilt({ max: 15, perspective: 900, scale: 1.04 });

  return (
    <div ref={tiltRef} className="highlight-card glass-panel card-3d">
      <div className="hl-icon-box hl-icon-3d">{item.icon}</div>
      <h4 className="hl-title">{item.title}</h4>
      <p className="hl-desc">{item.desc}</p>
    </div>
  );
};

const About = () => {
  const bioRef = use3DTilt({ max: 8, perspective: 1400, scale: 1.01 });

  const highlights = [
    {
      icon: <Code size={24} className="hl-icon" />,
      title: "Django & Python Backend",
      desc: "Constructing enterprise-grade web applications and RESTful APIs with Python, Django, and DRF."
    },
    {
      icon: <Database size={24} className="hl-icon" />,
      title: "MSSQL & Database Design",
      desc: "Designing and optimizing MSSQL & MySQL schemas, stored procedures, views, triggers, and queries."
    },
    {
      icon: <Cpu size={24} className="hl-icon" />,
      title: "Full-Stack & 3D Integration",
      desc: "Developing responsive interfaces using HTML, CSS, JavaScript, React.js, and Flutter API endpoints."
    },
    {
      icon: <Layers size={24} className="hl-icon" />,
      title: "PDF & Excel Reporting",
      desc: "Generating automated business reports in PDF and Excel formats using ReportLab and OpenPyXL."
    }
  ];

  const stats = [
    { value: "3+ Years", label: "Professional Experience" },
    { value: "6+", label: "Production & Live Projects" },
    { value: "6", label: "Technical Certifications" },
    { value: "MCA", label: "Master of Computer Applications" }
  ];

  return (
    <section id="about" className="section about-section perspective-viewport">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <User size={14} /> Get to know me
          </div>
          <h2 className="section-title">
            Passionate About Crafting <span className="gradient-text">Enterprise Solutions</span>
          </h2>
        </div>

        <div className="about-grid">
          <div ref={bioRef} className="about-bio-card glass-panel card-3d">
            <div className="bio-header-badge">
              <Terminal size={14} /> Full Stack Professional
            </div>
            <h3 className="bio-title">Hello! I'm Robin Roy.</h3>
            <p className="bio-paragraph">
              An enthusiastic Jr. Python Full Stack Developer who is ever ready to construct and maintain high-quality web applications for over a year. Strong knowledge of Django and Python in collaboration with interdisciplinary teams in creating solutions for the needs of the client.
            </p>
            <p className="bio-paragraph">
              Experienced with RESTful APIs while adapting agile methodologies to deliver based on timeline and application capacity. Passionate about continuous improvement, performance refactoring, and maintaining code review culture to nurture extraordinary work.
            </p>

            <div className="key-points">
              <div className="point-item point-item-3d">
                <CheckCircle2 size={18} className="check-icon pulse-anim" />
                <span>Python, Django & Django REST Framework</span>
              </div>
              <div className="point-item point-item-3d">
                <CheckCircle2 size={18} className="check-icon pulse-anim" />
                <span>Microsoft SQL Server (MSSQL) & MySQL</span>
              </div>
              <div className="point-item point-item-3d">
                <CheckCircle2 size={18} className="check-icon pulse-anim" />
                <span>React.js, HTML5, CSS3, JavaScript</span>
              </div>
              <div className="point-item point-item-3d">
                <CheckCircle2 size={18} className="check-icon pulse-anim" />
                <span>ReportLab (PDF) & OpenPyXL (Excel)</span>
              </div>
            </div>
          </div>

          <div className="about-highlights-grid">
            {highlights.map((item, idx) => (
              <HighlightCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* 3D Stats Row */}
        <div className="stats-row glass-panel stats-3d">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item stat-item-3d">
              <span className="stat-value gradient-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
