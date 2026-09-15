import React from 'react';
import { Layout, Server, Database, Wrench, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './Skills.css';

const SkillCategoryCard = ({ category }) => {
  const tiltRef = use3DTilt({ max: 10, perspective: 1100, scale: 1.02 });

  return (
    <div ref={tiltRef} className="skill-category-card glass-panel card-3d jarvis-skill-card">
      <div className="category-header">
        <div className="cat-icon cat-icon-jarvis">{category.icon}</div>
        <div>
          <span className="cat-prefix">Capability</span>
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
      title: "Languages & Frameworks",
      icon: <Server size={20} />,
      skills: [
        { name: "Python & Django", level: 92 },
        { name: "Django REST Framework", level: 90 },
        { name: "JavaScript & React.js", level: 88 },
        { name: "HTML5, CSS3 & Bootstrap", level: 90 },
        { name: "ReportLab & OpenPyXL", level: 86 }
      ]
    },
    {
      title: "Foundations",
      icon: <Layout size={20} />,
      skills: [
        { name: "Object-Oriented Programming", level: 90 },
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "Software Design Principles", level: 88 },
        { name: "Debugging & troubleshooting", level: 90 },
        { name: "Unit testing & CI/CD basics", level: 80 }
      ]
    },
    {
      title: "Databases & APIs",
      icon: <Database size={20} />,
      skills: [
        { name: "Microsoft SQL Server (MSSQL)", level: 90 },
        { name: "MySQL schema & queries", level: 88 },
        { name: "Stored procedures, views & triggers", level: 86 },
        { name: "REST APIs & secure authentication", level: 90 }
      ]
    },
    {
      title: "Tools & Practices",
      icon: <Wrench size={20} />,
      skills: [
        { name: "Git, Agile & code review", level: 92 },
        { name: "AI-assisted development (Cursor, Claude, ChatGPT)", level: 88 },
        { name: "Role-based access & audit logging", level: 86 },
        { name: "Open to ColdFusion & PHP training", level: 70 }
      ]
    }
  ];

  const certificates = [
    { name: "Database Management System", issuer: "NPTEL" },
    { name: "Python Basics", issuer: "Coursera" },
    { name: "MEAN Stack Web Development", issuer: "National Council for Technology and Training" },
    { name: "Python and Data Visualization", issuer: "ShapeAI 7-day bootcamp" },
    { name: "Introduction to Python and OpenCV", issuer: "PRODDEC College of Engineering, Chengannur" },
    { name: "C for Everyone: Programming Fundamentals", issuer: "Coursera" }
  ];

  const education = [
    {
      degree: "MCA — Master of Computer Applications",
      institution: "Santhigiri College of Computer Science (Mahatma Gandhi University), Thodupuzha",
      period: "2021 – 2023",
      score: "69%"
    },
    {
      degree: "BCA — Bachelor of Computer Applications",
      institution: "Manonmaniam Sundaranar University, Tirunelveli",
      period: "2017 – 2020",
      score: "74%"
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-num">03</span>
            <span className="section-rule"></span>
            <span className="section-kicker">Skills & credentials</span>
          </div>
          <h2 className="section-title">
            The stack I use to ship <span className="accent-italic">reliable software</span>
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
          <div ref={eduRef} className="credentials-card glass-panel card-3d jarvis-cred-card">
            <div className="credentials-header">
              <div className="cat-icon edu-icon cat-icon-jarvis">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="cat-prefix">Education</span>
                <h3 className="cat-title">Academic background</h3>
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
                    <span className="cred-score score-jarvis">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div ref={certRef} className="credentials-card glass-panel card-3d jarvis-cred-card">
            <div className="credentials-header">
              <div className="cat-icon cert-icon cat-icon-jarvis">
                <Award size={20} />
              </div>
              <div>
                <span className="cat-prefix">Credentials</span>
                <h3 className="cat-title">Certifications</h3>
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
