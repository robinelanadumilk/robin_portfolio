import React, { useState } from 'react';
import { ExternalLink, X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import elanaduImg from '../assets/elanadu_milk_project.jpg';
import use3DTilt from '../utils/use3DTilt';
import './Projects.css';

// Subcomponent with individual 3D tilt
const ProjectCard = ({ project, onSelect, featured }) => {
  const cardRef = use3DTilt({ max: 12, perspective: 1100, scale: 1.025 });

  return (
    <div ref={cardRef} className={`project-card glass-panel card-3d jarvis-project-card ${featured ? 'is-featured' : ''}`}>
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <button
            className="btn btn-primary preview-btn"
            onClick={() => onSelect(project)}
          >
            View case <ArrowUpRight size={15} />
          </button>
        </div>
        <span className="project-tag tag-jarvis">{project.tag}</span>
      </div>

      <div className="project-info">
        <div className="project-cat-row">
          <span className="project-category">{project.category}</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="tech-tags">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="tech-pill tech-pill-jarvis">{tech}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tech-pill more tech-pill-jarvis">+{project.techStack.length - 4}</span>
          )}
        </div>

        <div className="project-footer">
          <button
            className="details-link-jarvis"
            onClick={() => onSelect(project)}
          >
            View architecture →
          </button>
          <div className="external-links">
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="icon-link-jarvis" aria-label="Live Demo" title="Launch Production URL">
              <ArrowUpRight size={17} />
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
      title: "Elanadu Milk HR & ERP Website",
      category: "ERP & Live",
      tag: "Live production",
      portTag: "ERP · MSSQL · DRF",
      image: elanaduImg,
      description: "Built and maintain a full ERP system managing inventory, sales, distribution, attendance, and reporting via REST APIs, with a React frontend. Live at est.elanadu.in.",
      longDescription: "Full ERP system for Elanadu Milk Private Limited, built with Python, Django, MSSQL, and React. Manages inventory, sales, distribution, attendance, and reporting through REST APIs, following OOP design principles. Frontend built with React.",
      techStack: ["Python", "Django", "MSSQL", "React", "ReportLab", "OpenPyXL", "REST APIs"],
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
      title: "MGUIF Mainsite Portal",
      category: "Full Stack",
      tag: "Live portal",
      portTag: "React · Django REST",
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
      title: "MGUIF High-Performance Computing (HPC)",
      category: "Full Stack",
      tag: "HPC platform",
      portTag: "React · HPC APIs",
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
      title: "MGUIF Startup Incubation Platform",
      category: "Full Stack",
      tag: "Incubation",
      portTag: "React · Django REST",
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
      title: "ICSG Global Web Platform",
      category: "Full Stack",
      tag: "Live platform",
      portTag: "React · REST APIs",
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
      title: "Campuzine Publication System",
      category: "Frontend",
      tag: "Live product",
      portTag: "React · Django",
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

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-num">02</span>
            <span className="section-rule"></span>
            <span className="section-kicker">Selected work</span>
          </div>
          <h2 className="section-title">
            Systems in the wild, not <span className="accent-italic">just case studies</span>
          </h2>
        </div>

        <div className="filter-wrapper">
          <div className="filter-label">Filter</div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn filter-btn-jarvis ${activeFilter === cat ? 'active' : ''}`}
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
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              featured={activeFilter === 'All' && project.id === 1}
            />
          ))}
        </div>

        {/* 3D Stark Detail Modal */}
        {selectedProject && (
          <div className="modal-overlay modal-overlay-3d" onClick={() => setSelectedProject(null)}>
            <div className="modal-content modal-content-3d jarvis-project-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-terminal-top">
                <span className="modal-terminal-file">{selectedProject.portTag}</span>
                <button className="close-btn-top-jarvis" onClick={() => setSelectedProject(null)} aria-label="Close">
                  <X size={16} /> Close
                </button>
              </div>

              <div className="modal-header">
                <span className="modal-category category-pill-jarvis">{selectedProject.portTag}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
              </div>

              <div className="modal-image-wrapper-jarvis">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              </div>

              <div className="modal-body">
                <h4 className="modal-subheading">Overview</h4>
                <p className="modal-text">{selectedProject.longDescription}</p>

                <h4 className="modal-subheading">What shipped</h4>
                <ul className="modal-features">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="feature-item feature-item-jarvis">
                      <CheckCircle2 size={16} className="feat-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="modal-subheading">Stack</h4>
                <div className="modal-tech-pills">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill tech-pill-jarvis modal-pill">{tech}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <ExternalLink size={15} /> Open live site
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
