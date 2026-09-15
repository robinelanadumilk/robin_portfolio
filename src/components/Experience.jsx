import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './Experience.css';

const TimelineCard = ({ exp }) => {
  const cardRef = use3DTilt({ max: 8, perspective: 1200, scale: 1.015 });

  return (
    <div ref={cardRef} className="timeline-content glass-panel card-3d jarvis-exp-card">
      <div className="exp-inner-pad">
        <div className="exp-header">
          <div>
            <span className="exp-type exp-type-jarvis">{exp.type}</span>
            <h3 className="exp-role">{exp.role}</h3>
            <h4 className="exp-company">{exp.company}</h4>
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
          <h5 className="achievements-title">Selected work</h5>
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
      type: "Full-time",
      description: "Develop and maintain enterprise-grade web applications and REST APIs using Python and Django for an ERP covering inventory, procurement, sales, distribution, stock transfers, attendance, and trip management.",
      achievements: [
        "Build and integrate REST APIs consumed by web and Flutter mobile apps, with secure authentication and efficient data exchange, following OOP and clean-code principles.",
        "Design and optimize Microsoft SQL Server databases, including stored procedures, views, triggers, and complex queries.",
        "Develop responsive frontend interfaces using HTML, CSS, JavaScript, React, and Django templates.",
        "Debug, troubleshoot, and optimize production systems — including legacy modules — to improve performance and reliability; manage releases via Git.",
        "Use AI coding assistants to speed up implementation and code review, while validating generated code for correctness, security, and maintainability.",
        "Generate automated business reports in PDF and Excel using ReportLab and OpenPyXL; implement role-based access control and audit trails."
      ],
      skills: ["Python", "Django", "Django REST Framework", "Microsoft SQL Server (MSSQL)", "HTML", "CSS", "JavaScript", "REST APIs", "Flutter API", "ReportLab", "OpenPyXL", "Git"]
    },
    {
      commitHash: "4FE8210",
      role: "Jr. Python Django Full Stack Developer",
      company: "MGUIF",
      location: "Ettumanoor, Kottayam",
      period: "06/2024 – 09/2025",
      type: "Full-time",
      description: "Developed dynamic, responsive web applications using Django, React.js, and JavaScript across five live production projects.",
      achievements: [
        "Delivered five live production projects: Mainsite, HPC, Incubation Site, ICSG Website, and Campuzine.",
        "Designed and integrated RESTful APIs for client-server communication using Django REST Framework and MySQL.",
        "Built cross-device interfaces with HTML, CSS, and Bootstrap; implemented secure authentication and data handling.",
        "Participated in Agile development: sprint planning, code reviews, and daily standups.",
        "Used Git for version control across collaborative feature branches."
      ],
      skills: ["Django", "React.js", "JavaScript", "Django REST Framework", "HTML", "CSS", "Bootstrap", "Git", "MySQL"]
    },
    {
      commitHash: "2B9A712",
      role: "Software Engineer",
      company: "Santhisoft Technologies",
      location: "Thodupuzha, Idukki",
      period: "11/2023 – 05/2024",
      type: "Full-time",
      description: "Built and integrated modular components for scalable single-page applications using Angular.",
      achievements: [
        "Built and integrated modular components for scalable single-page applications using Angular.",
        "Collaborated on frontend deployment strategies and maintained the codebase using Git.",
        "Contributed to UI/UX design discussions focused on scalability, modularity, and performance."
      ],
      skills: ["Angular", "Single-Page Applications", "UI/UX Design", "Scalability", "Git"]
    },
    {
      commitHash: "109F3E5",
      role: "Jr. Software Developer",
      company: "Luminar Technolab",
      location: "Kochi",
      period: "11/2020 – 06/2021",
      type: "Apprenticeship",
      description: "Gained foundational experience in software development practices and web technologies.",
      achievements: [
        "Gained foundational experience in software development practices and web technologies."
      ],
      skills: ["Python", "Web Engineering", "Git"]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-num">04</span>
            <span className="section-rule"></span>
            <span className="section-kicker">Career</span>
          </div>
          <h2 className="section-title">
            A path through <span className="accent-italic">live systems</span>
          </h2>
        </div>

        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot timeline-dot-jarvis">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <TimelineCard exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
