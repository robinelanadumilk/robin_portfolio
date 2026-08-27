import React from 'react';
import { Layout, Server, Database, Wrench, CheckCircle2, GraduationCap, Award, Zap } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './Skills.css';

const SkillCategoryCard = ({ category }) => {
  const tiltRef = use3DTilt({ max: 10, perspective: 1100, scale: 1.02 });

  return (
    <div ref={tiltRef} className="skill-category-card glass-panel card-3d jarvis-skill-card hud-corner-brackets">
      <div className="category-header">
        <div className="cat-icon cat-icon-jarvis">{category.icon}</div>
        <div>
          <span className="cat-prefix">// ARSENAL_MODULE</span>
          <h3 className="cat-title">{category.title}</h3>
        </div>
      </div>

      <div className="skill-list">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="skill-item">
            <div className="skill-meta">
              <span className="skill-name">
                <CheckCircle2 size={13} className="skill-bullet" />
                {skill.name}
              </span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="progress-bar-bg progress-bar-jarvis">
              <div
                className="progress-bar-fill progress-fill-jarvis"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const eduRef = use3DTilt({ max: 8, perspective: 1200, scale: 1.015 });
  const certRef = use3DTilt({ max: 8, perspective: 1200, scale: 1.015 });

  const skillCategories = [
    {
      title: "Backend & Python Frameworks",
      icon: <Server size={20} />,
      skills: [
        { name: "Python 3.x", level: 95 },
        { name: "Django Framework", level: 92 },
        { name: "Django REST Framework (DRF)", level: 90 },
        { name: "RESTful API Architecture", level: 95 },
        { name: "ReportLab & OpenPyXL", level: 88 }
      ]
    },
    {
      title: "Frontend Engineering",
      icon: <Layout size={20} />,
      skills: [
        { name: "HTML5 & Semantic UI", level: 95 },
        { name: "CSS3 & Modern Animations", level: 92 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js & Three.js 3D", level: 88 },
        { name: "Bootstrap & Responsive UI", level: 88 }
      ]
    },
    {
      title: "Databases & Security Architecture",
      icon: <Database size={20} />,
      skills: [
        { name: "Microsoft SQL Server (MSSQL)", level: 90 },
        { name: "MySQL Optimization", level: 88 },
        { name: "Stored Procedures & Triggers", level: 88 },
        { name: "Role-Based Access Control (RBAC)", level: 90 }
      ]
    },
    {
      title: "DevOps & Integration Tools",
      icon: <Wrench size={20} />,
      skills: [
        { name: "GIT (Version Control)", level: 95 },
        { name: "Flutter (Backend Integration)", level: 85 },
        { name: "Agile Development & Sprints", level: 90 },
        { name: "Production Debugging & Profiling", level: 90 }
      ]
    }
  ];

  const certificates = [
    { name: "Database Management System", issuer: "NPTEL Verified" },
    { name: "Python Basics", issuer: "Coursera Verified" },
    { name: "MEAN STACK Web Development", issuer: "National Council for Tech & Training" },
    { name: "Python and Data Visualization", issuer: "ShapeAI 7-Day Bootcamp" },
    { name: "Introduction to Python & OpenCV", issuer: "PRODDEC College of Eng" },
    { name: "C for Everyone: Programming", issuer: "Coursera Verified" }
  ];

  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Santhigiri College of Computer Science (MGU)",
      period: "11/2021 – 08/2023",
      score: "69%"
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Manonmaniam Sundaranar University",
      period: "2017 – 2020",
      score: "74%"
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <Zap size={14} /> J.A.R.V.I.S. // ARSENAL CAPABILITIES
          </div>
          <h2 className="section-title">
            Technical Arsenal &amp; <span className="gradient-text">Proficiencies</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div className="credentials-row">
          {/* Education Card */}
          <div ref={eduRef} className="credentials-card glass-panel card-3d jarvis-cred-card hud-corner-brackets">
            <div className="credentials-header">
              <div className="cat-icon edu-icon cat-icon-jarvis">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="cat-prefix">// ACADEMIC_QUALIFICATIONS</span>
                <h3 className="cat-title">Education Background</h3>
              </div>
            </div>
            <div className="credentials-list">
              {education.map((edu, idx) => (
                <div key={idx} className="cred-item cred-item-jarvis">
                  <div className="cred-main">
                    <h4 className="cred-title">{edu.degree}</h4>
                    <p className="cred-sub">{edu.institution}</p>
                  </div>
                  <div className="cred-badge-wrap">
                    <span className="cred-period">{edu.period}</span>
                    <span className="cred-score score-jarvis">SCORE: {edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div ref={certRef} className="credentials-card glass-panel card-3d jarvis-cred-card hud-corner-brackets">
            <div className="credentials-header">
              <div className="cat-icon cert-icon cat-icon-jarvis">
                <Award size={20} />
              </div>
              <div>
                <span className="cat-prefix">// VERIFIED_CREDENTIALS</span>
                <h3 className="cat-title">Verified Certifications</h3>
              </div>
            </div>
            <div className="cert-grid">
              {certificates.map((cert, idx) => (
                <div key={idx} className="cert-item cert-item-jarvis">
                  <CheckCircle2 size={15} className="cert-check" />
                  <div>
                    <h4 className="cert-title">{cert.name}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
