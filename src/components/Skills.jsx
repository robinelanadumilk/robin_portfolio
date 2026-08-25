import React from 'react';
import { Cpu, Layout, Server, Database, Wrench, CheckCircle2, GraduationCap, Award, Sparkles } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './Skills.css';

const SkillCategoryCard = ({ category }) => {
  const tiltRef = use3DTilt({ max: 10, perspective: 1100, scale: 1.02 });

  return (
    <div ref={tiltRef} className="skill-category-card glass-panel card-3d">
      <div className="category-header">
        <div className="cat-icon cat-icon-3d">{category.icon}</div>
        <h3 className="cat-title">{category.title}</h3>
      </div>

      <div className="skill-list">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="skill-item">
            <div className="skill-meta">
              <span className="skill-name">
                <CheckCircle2 size={14} className="skill-bullet pulse-anim" />
                {skill.name}
              </span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="progress-bar-bg progress-bar-3d">
              <div
                className="progress-bar-fill progress-fill-3d"
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
      title: "Frontend & 3D Engineering",
      icon: <Layout size={22} />,
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "React.js & Three.js", level: 90 },
        { name: "3D UI & WebGL Shaders", level: 88 },
        { name: "Bootstrap & Responsive UI", level: 88 }
      ]
    },
    {
      title: "Databases & Security",
      icon: <Database size={22} />,
      skills: [
        { name: "Microsoft SQL Server (MSSQL)", level: 90 },
        { name: "MySQL Optimization", level: 88 },
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
    <section id="skills" className="section skills-section perspective-viewport">
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
            <SkillCategoryCard key={index} category={category} />
          ))}
        </div>

        {/* Education & Certifications Row with 3D Tilt */}
        <div className="credentials-row">
          {/* Education Card */}
          <div ref={eduRef} className="credentials-card glass-panel card-3d">
            <div className="credentials-header">
              <div className="cat-icon edu-icon cat-icon-3d">
                <GraduationCap size={22} />
              </div>
              <h3 className="cat-title">Education Background</h3>
            </div>
            <div className="credentials-list">
              {education.map((edu, idx) => (
                <div key={idx} className="cred-item cred-item-3d">
                  <div className="cred-main">
                    <h4 className="cred-title">{edu.degree}</h4>
                    <p className="cred-sub">{edu.institution}</p>
                  </div>
                  <div className="cred-badge-wrap">
                    <span className="cred-period">{edu.period}</span>
                    <span className="cred-score score-3d">Score: {edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div ref={certRef} className="credentials-card glass-panel card-3d">
            <div className="credentials-header">
              <div className="cat-icon cert-icon cat-icon-3d">
                <Award size={22} />
              </div>
              <h3 className="cat-title">Certifications & Honors</h3>
            </div>
            <div className="cert-grid">
              {certificates.map((cert, idx) => (
                <div key={idx} className="cert-item cert-item-3d">
                  <CheckCircle2 size={16} className="cert-check pulse-anim" />
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
