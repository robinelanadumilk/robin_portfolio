import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, Filter, X, CheckCircle2, Layers, ArrowUpRight } from 'lucide-react';
import elanaduImg from '../assets/elanadu_milk_project.jpg';
import use3DTilt from '../utils/use3DTilt';
import './Projects.css';

// Subcomponent with individual 3D tilt
const ProjectCard = ({ project, onSelect }) => {
  const cardRef = use3DTilt({ max: 12, perspective: 1100, scale: 1.025 });

  return (
    <div ref={cardRef} className="project-card glass-panel card-3d">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <button
            className="btn btn-primary preview-btn btn-3d"
            onClick={() => onSelect(project)}
          >
            Explore 3D Details <Sparkles size={16} />
          </button>
        </div>
        <span className="project-tag tag-3d">{project.tag}</span>
      </div>

      <div className="project-info">
        <div className="project-cat-row">
          <span className="project-category">{project.category}</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="tech-tags">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="tech-pill tech-pill-3d">{tech}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tech-pill more tech-pill-3d">+{project.techStack.length - 4}</span>
          )}
        </div>

        <div className="project-footer">
          <button
            className="details-link-3d"
            onClick={() => onSelect(project)}
          >
            Full Architecture Spec &rarr;
          </button>
          <div className="external-links">
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="icon-link-3d" aria-label="Live Demo" title="Open Live Project">
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <section id="projects" className="section projects-section perspective-viewport">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <FolderGit2 size={14} /> My Portfolio Showcase
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Applications</span>
          </h2>
        </div>

        {/* Filter Controls with 3D Pills */}
        <div className="filter-wrapper">
          <div className="filter-label">
            <Filter size={16} /> Filter by Category:
          </div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn filter-btn-3d ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with 3D Perspective */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* 3D Modal Popup */}
        {selectedProject && (
          <div className="modal-overlay modal-overlay-3d" onClick={() => setSelectedProject(null)}>
            <div className="modal-content modal-content-3d project-modal-3d" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn close-btn-3d" onClick={() => setSelectedProject(null)} aria-label="Close">
                <X size={20} />
              </button>

              <div className="modal-header">
                <span className="modal-category category-pill-3d">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
              </div>

              <div className="modal-image-wrapper-3d">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              </div>

              <div className="modal-body">
                <h4 className="modal-subheading">Architecture & System Overview</h4>
                <p className="modal-text">{selectedProject.longDescription}</p>

                <h4 className="modal-subheading">Key Technical Features</h4>
                <ul className="modal-features">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="feature-item feature-item-3d">
                      <CheckCircle2 size={17} className="feat-check pulse-anim" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="modal-subheading">Technologies Used</h4>
                <div className="modal-tech-pills">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill tech-pill-3d modal-pill">{tech}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-3d">
                    <ExternalLink size={16} /> Launch Live Production Preview
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
