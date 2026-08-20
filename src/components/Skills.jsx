import React from 'react';
import { Cpu, Layout, Server, Database, Wrench, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Python Frameworks",
      icon: <Server size={22} />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Django Framework", level: 92 },
        { name: "Django REST Framework", level: 90 },
        { name: "REST API Architecture", level: 95 },
        { name: "ReportLab & OpenPyXL", level: 88 }
      ]
    },
    {
      title: "Frontend Engineering",
      icon: <Layout size={22} />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "JAVASCRIPT", level: 90 },
        { name: "React.js", level: 88 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Databases & Security",
      icon: <Database size={22} />,
      skills: [
        { name: "Microsoft SQL Server (MSSQL)", level: 90 },
        { name: "MySql", level: 88 },
        { name: "Stored Procedures & Triggers", level: 88 },
        { name: "Role-Based Access Control (RBAC)", level: 90 }
      ]
    },
    {
      title: "Tools & Integration",
      icon: <Wrench size={22} />,
      skills: [
        { name: "GIT (Version Control)", level: 95 },
        { name: "Flutter (Backend Integration)", level: 85 },
        { name: "Agile Development Processes", level: 90 },
        { name: "Production Debugging", level: 90 }
      ]
    }
  ];

  const certificates = [
    { name: "Database Management System", issuer: "NPTEL" },
    { name: "Python Basics", issuer: "Coursera" },
    { name: "MEAN STACK Web Development", issuer: "National Council for Technology and Training" },
    { name: "Python and Data Visualization", issuer: "7-day Bootcamp Certificate by ShapeAI" },
    { name: "Introduction to Python and Open CV", issuer: "PRODDEC College of Engineering, Chengannur" },
    { name: "C for Everyone: Programming Fundamentals", issuer: "Coursera" }
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
            <Cpu size={14} /> Technical Profile
          </div>
          <h2 className="section-title">
            Programming Skills & <span className="gradient-text">Qualifications</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card glass-panel">
              <div className="category-header">
                <div className="cat-icon">{category.icon}</div>
                <h3 className="cat-title">{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">
                        <CheckCircle2 size={14} className="skill-bullet" />
                        {skill.name}
                      </span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div className="credentials-row">
          {/* Education Card */}
          <div className="credentials-card glass-panel">
            <div className="credentials-header">
              <div className="cat-icon edu-icon">
                <GraduationCap size={22} />
              </div>
              <h3 className="cat-title">Education</h3>
            </div>
            <div className="credentials-list">
              {education.map((edu, idx) => (
                <div key={idx} className="cred-item">
                  <div className="cred-main">
                    <h4 className="cred-title">{edu.degree}</h4>
                    <p className="cred-sub">{edu.institution}</p>
                  </div>
                  <div className="cred-badge-wrap">
                    <span className="cred-period">{edu.period}</span>
                    <span className="cred-score">Score: {edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="credentials-card glass-panel">
            <div className="credentials-header">
              <div className="cat-icon cert-icon">
                <Award size={22} />
              </div>
              <h3 className="cat-title">Certificates</h3>
            </div>
            <div className="cert-grid">
              {certificates.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <CheckCircle2 size={16} className="cert-check" />
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
