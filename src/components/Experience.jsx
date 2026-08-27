import React from 'react';
import { Calendar, MapPin, ChevronRight, Zap } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './Experience.css';

const TimelineCard = ({ exp, commitHash }) => {
  const cardRef = use3DTilt({ max: 8, perspective: 1200, scale: 1.015 });

  return (
    <div ref={cardRef} className="timeline-content glass-panel card-3d jarvis-exp-card hud-corner-brackets">
      <div className="exp-terminal-bar">
        <Zap size={13} className="jarvis-branch-icon" />
        <span className="commit-hash">MISSION_LOG [0x{commitHash}]</span>
        <span className="commit-branch">[STARK_CORE_DEPLOYMENT]</span>
      </div>

      <div className="exp-inner-pad">
        <div className="exp-header">
          <div>
            <span className="exp-type exp-type-jarvis">{exp.type}</span>
            <h3 className="exp-role">{exp.role}</h3>
            <h4 className="exp-company jarvis-glow-text">@ {exp.company}</h4>
          </div>
          <div className="exp-meta">
            <span className="exp-period">
              <Calendar size={13} /> {exp.period}
            </span>
            <span className="exp-location">
              <MapPin size={13} /> {exp.location}
            </span>
          </div>
        </div>

        <p className="exp-desc">{exp.description}</p>

        <div className="exp-achievements">
          <h5 className="achievements-title">// ENGINEERING &amp; ARCHITECTURAL CHANGELOG:</h5>
          <ul>
            {exp.achievements.map((item, i) => (
              <li key={i} className="achieve-item-jarvis">
                <ChevronRight size={14} className="achieve-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="exp-skills">
          {exp.skills.map((s, idx) => (
            <span key={idx} className="tech-pill tech-pill-jarvis">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      commitHash: "78193A9",
      role: "Python Backend Developer",
      company: "Elanadu Milk Private Limited",
      location: "Thrissur",
      period: "09/2025 – Present",
      type: "Full-Time Production",
      description: "Develop and maintain enterprise-grade web applications, RESTful APIs, and core backend services using Python and Django.",
      achievements: [
        "Develop and maintain enterprise-grade web applications and RESTful APIs using Python and Django.",
        "Design, develop, and optimize backend services for inventory management, milk procurement, sales, distribution, stock transfers, attendance, trip management, and reporting systems.",
        "Build and integrate REST APIs for web and Flutter mobile applications, ensuring secure authentication and efficient data exchange.",
        "Develop responsive frontend interfaces using HTML, CSS, JavaScript, and Django templates.",
        "Design and optimize Microsoft SQL Server (MSSQL) databases, including tables, stored procedures, views, triggers, and complex SQL queries.",
        "Generate business reports in PDF and Excel formats using ReportLab and OpenPyXL.",
        "Implement role-based access control, logging, audit trails, and API security for enterprise applications.",
        "Integrate third-party APIs and internal business services to streamline operational workflows.",
        "Debug, optimize, and maintain production applications, improving system performance and reliability.",
        "Collaborate with cross-functional teams to gather requirements, develop new features, and deliver business-critical solutions.",
        "Contribute to the development and backend integration of Flutter-based mobile applications.",
        "Participate in version control, code reviews, testing, deployment, and ongoing system maintenance using Git."
      ],
      skills: ["Python", "Django", "Django REST Framework", "Microsoft SQL Server (MSSQL)", "HTML", "CSS", "JavaScript", "REST APIs", "Flutter API", "ReportLab", "OpenPyXL", "Git"]
    },
    {
      commitHash: "4FE8210",
      role: "Jr. Python Django Full Stack Developer",
      company: "MGUIF",
      location: "Ettumanoor, Kottayam",
      period: "06/2024 – 09/2025",
      type: "Full-Time Deployment",
      description: "Developed dynamic and responsive web applications and integrated RESTful APIs across multiple live projects.",
      achievements: [
        "Developed dynamic and responsive web applications using Django, React.js, and JavaScript.",
        "Designed and integrated RESTful APIs for seamless client-server communication using Django REST Framework.",
        "Built cross-device compatible interfaces with HTML, CSS, and Bootstrap for frontend components.",
        "Utilized Git for version control and managed code across collaborative branches.",
        "Participated in Agile development processes, including sprint planning, code reviews, and daily standups."
      ],
      skills: ["Django", "React.js", "JavaScript", "Django REST Framework", "HTML", "CSS", "Bootstrap", "Git", "MySQL"]
    },
    {
      commitHash: "2B9A712",
      role: "Software Engineer",
      company: "Santhisoft Technologies",
      location: "Thodupuzha, Idukki",
      period: "11/2023 – 05/2024",
      type: "Full-Time Deployment",
      description: "Built and integrated modular components for scalable single-page applications.",
      achievements: [
        "Built and integrated modular components for scalable single-page applications using Angular.",
        "Collaborated on frontend deployment strategies and maintained codebase using Git.",
        "Contributed to UI/UX design discussions, focusing on scalability, modularity, and performance optimization."
      ],
      skills: ["Angular", "Single-Page Applications", "UI/UX Design", "Scalability", "Git"]
    },
    {
      commitHash: "109F3E5",
      role: "Jr. Software Developer",
      company: "Luminar Technolab",
      location: "Kochi",
      period: "11/2020 – 06/2021",
      type: "Software Apprenticeship",
      description: "Hands-on software application development and web engineering training.",
      achievements: [
        "Built core Python application modules and learned web technology engineering practices.",
        "Gained practical experience with collaborative version control using Git."
      ],
      skills: ["Python", "Web Engineering", "Git"]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <Zap size={14} /> J.A.R.V.I.S. // MISSION TIMELINE
          </div>
          <h2 className="section-title">
            Operational Career <span className="gradient-text">Audit Trail</span>
          </h2>
        </div>

        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot timeline-dot-jarvis">
                <Zap size={16} />
              </div>
              <TimelineCard exp={exp} commitHash={exp.commitHash} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
