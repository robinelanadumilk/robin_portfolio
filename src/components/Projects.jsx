import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, Filter, X, CheckCircle2 } from 'lucide-react';
import elanaduImg from '../assets/elanadu_milk_project.jpg';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Elanadu Milk Website & Mobile App",
      category: "ERP & Live",
      tag: "Live ERP Backend",
      image: elanaduImg,
      description: "Developed and maintained an enterprise ERP system using Python, Django, and MSSQL to manage inventory, sales, distribution, attendance, and RESTful APIs.",
      longDescription: "Comprehensive enterprise ERP platform built for Elanadu Milk Private Limited. Manages inventory, milk procurement, sales, distribution, stock transfers, employee attendance, trip management, automated PDF/Excel report generation, and RESTful API endpoints for Flutter mobile applications.",
      techStack: ["Python", "Django", "Django REST Framework", "MSSQL", "ReportLab", "OpenPyXL", "Flutter API"],
      features: [
        "Inventory, milk procurement, sales & distribution management system",
        "RESTful APIs for web and Flutter mobile apps with secure authentication",
        "MSSQL database optimization including stored procedures, views, triggers & complex queries",
        "Business reports in PDF and Excel formats using ReportLab and OpenPyXL",
        "Role-based access control (RBAC), logging, and security audit trails"
      ],
      demoUrl: "https://est.elanadu.in/"
    },
    {
      id: 2,
      title: "MGUIF Mainsite",
      category: "Full Stack",
      tag: "Live MGUIF Project",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Scalable interactive web application with React.js frontend and Django REST API integration.",
      longDescription: "Developed a scalable and responsive frontend web application using React.js to support interactive user workflows. Integrated RESTful APIs for real-time data retrieval and submission with a Django backend.",
      techStack: ["React.js", "Django", "Django REST Framework", "MySQL", "JavaScript", "HTML/CSS"],
      features: [
        "Developed scalable and responsive frontend using React.js",
        "Integrated RESTful APIs for real-time data retrieval with Django backend",
        "Built dynamic UI components and applied performance optimizations",
        "Implemented secure user authentication and safe data handling"
      ],
      demoUrl: "https://mguif.com/"
    },
    {
      id: 3,
      title: "MGUIF HPC Platform",
      category: "Full Stack",
      tag: "Live MGUIF Project",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "High-performance computing web interface built with React.js and Django REST Framework.",
      longDescription: "Developed a scalable frontend application using React.js to support complex HPC workflows. Integrated RESTful APIs for seamless, real-time data communication with the Django backend.",
      techStack: ["React.js", "Django", "RESTful APIs", "MySQL", "JavaScript"],
      features: [
        "Built modular and dynamic React UI components",
        "Integrated RESTful APIs for seamless real-time data communication",
        "Enhanced responsiveness and system performance optimizations",
        "Implemented secure data handling and user authentication"
      ],
      demoUrl: "https://hpcparamastra.mguif.com/"
    },
    {
      id: 4,
      title: "MGUIF Incubation Site",
      category: "Full Stack",
      tag: "Live MGUIF Project",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description: "Startup incubation platform featuring mentor coordination modules and automated UI workflows.",
      longDescription: "Developed a startup incubation platform frontend using React.js with secure API integration. Designed mentor coordination modules, automated UI workflows, dynamic onboarding forms, and resource management tools.",
      techStack: ["React.js", "Django", "RESTful APIs", "MySQL", "Bootstrap"],
      features: [
        "Startup incubation platform with secure API integration",
        "Implemented mentor coordination modules and automated UI workflows",
        "Designed dynamic onboarding forms for startups",
        "Ensured responsive layout and optimized cross-device user experience"
      ],
      demoUrl: "https://incubation.mguif.com/"
    },
    {
      id: 5,
      title: "ICSG Website",
      category: "Full Stack",
      tag: "Live MGUIF Project",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      description: "Interactive web platform with optimized rendering state management and Django REST API integration.",
      longDescription: "Developed a scalable and responsive frontend using React.js for interactive user engagement. Integrated RESTful APIs for real-time data operations with a Django backend.",
      techStack: ["React.js", "Django", "Django REST Framework", "MySQL", "JavaScript"],
      features: [
        "Developed scalable and responsive frontend using React.js",
        "Integrated RESTful APIs for real-time data operations with Django backend",
        "Built dynamic UI components with optimized rendering and state management",
        "Implemented secure data handling and user authentication"
      ],
      demoUrl: "https://icsg.world/"
    },
    {
      id: 6,
      title: "Campuzine Platform",
      category: "Frontend",
      tag: "Ongoing MGUIF Project",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      description: "Digital campus publication app built with React.js and real-time Django REST API integration.",
      longDescription: "Ongoing live project of MGUIF. Developed a scalable frontend application using React.js for interactive user workflows, real-time data streaming, dynamic UI rendering, and secure user authentication.",
      techStack: ["React.js", "RESTful APIs", "Django", "MySQL", "JavaScript"],
      features: [
        "Scalable frontend application using React.js",
        "Integrated REST APIs to enable real-time data operations",
        "Built dynamic UI components and performance optimizations",
        "Ensured secure data handling and user authentication"
      ],
      demoUrl: "https://campuzine.com/"
    }
  ];

  const categories = ['All', 'ERP & Live', 'Full Stack', 'Frontend'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <FolderGit2 size={14} /> My Portfolio
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Applications</span>
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="filter-wrapper">
          <div className="filter-label">
            <Filter size={16} /> Filter by Category:
          </div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <button
                    className="btn btn-primary preview-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details <Sparkles size={16} />
                  </button>
                </div>
                <span className="project-tag">{project.tag}</span>
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-tags">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-pill more">+{project.techStack.length - 4}</span>
                  )}
                </div>

                <div className="project-footer">
                  <button
                    className="details-link"
                    onClick={() => setSelectedProject(project)}
                  >
                    Read Details &rarr;
                  </button>
                  <div className="external-links">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="icon-link" aria-label="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedProject(null)} aria-label="Close">
                <X size={20} />
              </button>

              <div className="modal-header">
                <span className="modal-category">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
              </div>

              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />

              <div className="modal-body">
                <h4 className="modal-subheading">Overview</h4>
                <p className="modal-text">{selectedProject.longDescription}</p>

                <h4 className="modal-subheading">Key Technical Features</h4>
                <ul className="modal-features">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="feature-item">
                      <CheckCircle2 size={16} className="feat-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="modal-subheading">Technologies Used</h4>
                <div className="modal-tech-pills">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill modal-pill">{tech}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} /> Live Demo Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
