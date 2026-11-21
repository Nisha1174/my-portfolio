
import { useEffect, useState } from "react";
import "./ProjectsSection.css";

const projects = [
  {
    id: "01",
    name: "Mechanical Inspection System",
    category: "ENTERPRISE QUALITY MANAGEMENT",
    description:
      "A mechanical quality management platform designed to manage product inspections, measurements, revisions and approval workflows.",
    type: "inspection",
    status: "Enterprise Application",
    role: "Full Stack Development",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "REST API",
      "JavaScript"
    ],
    features: [
      "Role-based access for Super Admin, Product/Design Manager and Inspection Manager.",
      "Product and drawing revision management.",
      "Inspection rounds and dimension-wise measurements.",
      "Inspection approval workflows.",
      "Centralized quality management."
    ],
    modules: [
      "User Management",
      "Products & Drawings",
      "Product Revisions",
      "Inspection Management",
      "Measurements",
      "Approvals"
    ],
    architecture:
      "A role-based application with backend APIs, relational database entities and structured inspection workflows.",
    contribution:
      "Developed application modules and workflows for managing mechanical inspections, product revisions and quality approvals."
  },
  {
    id: "02",
    name: "Samriddhi Financial Services",
    category: "FINANCIAL SERVICES PLATFORM",
    description:
      "A backend platform for financial services operations, focusing on secure authentication and centralized administration.",
    type: "finance",
    status: "Backend Development",
    role: "Java Backend Development",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "REST APIs"
    ],
    features: [
      "Shared authentication for admin and customer roles.",
      "JWT-based authentication and authorization.",
      "Admin dashboard backend.",
      "Employee management.",
      "Contact and lead management.",
      "Role-based access control."
    ],
    modules: [
      "Authentication",
      "Admin Dashboard",
      "Employee Management",
      "Contact Management",
      "Lead Management"
    ],
    architecture:
      "A Spring Boot REST API backend connected to MySQL, with JWT-based security and role-specific access.",
    contribution:
      "Worked on the admin-side backend, database integration, authentication and business management modules."
  },
  {
    id: "03",
    name: "SnapKart",
    category: "E-COMMERCE APPLICATION",
    description:
      "A Blinkit-inspired e-commerce application with product discovery, secure authentication, cart management and order processing.",
    type: "ecommerce",
    status: "Full Stack Development",
    role: "Java Backend Development",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Spring Data JPA",
      "Maven",
      "Lombok"
    ],
    features: [
      "JWT-based user authentication.",
      "Category and product management.",
      "Shopping cart management.",
      "Address management.",
      "Order processing.",
      "Coupon management."
    ],
    modules: [
      "Authentication",
      "Categories",
      "Products",
      "Cart",
      "Address",
      "Orders",
      "Coupons"
    ],
    architecture:
      "A modular Spring Boot backend using Spring Data JPA, MySQL and Spring Security.",
    contribution:
      "Developed backend modules for authentication, products, cart, address, orders and coupons."
  }
];

/* PROJECT CASE STUDY MODAL */

function ProjectDetails({ project, onClose }) {

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="case-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >

      <article
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-project-title"
      >

        {/* MODAL HEADER */}

        <div className="case-modal-header">

          <div>
            <span className="case-header-label">
              PROJECT CASE STUDY
            </span>

            <span className="case-project-number">
              / {project.id}
            </span>
          </div>

          <span className="case-live">
            ● {project.status}
          </span>

        </div>

        {/* CLOSE BUTTON */}

        <button
          type="button"
          className="case-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ✕
        </button>

        {/* PROJECT CONTENT */}

        <div className="case-content">

          <p className="case-category">
            {project.category}
          </p>

          <h2 id="case-project-title">
            {project.name}
          </h2>

          <p className="case-description">
            {project.description}
          </p>

          <div className="case-divider"></div>

          {/* PROJECT INFORMATION */}

          <div className="case-info-grid">

            <div className="case-info-card">
              <span>DEVELOPMENT ROLE</span>
              <strong>{project.role}</strong>
            </div>

            <div className="case-info-card">
              <span>PROJECT TYPE</span>
              <strong>{project.status}</strong>
            </div>

          </div>

          {/* OVERVIEW */}

          <section className="case-section">

            <div className="case-section-heading">
              <span>01</span>
              <h3>Project Overview</h3>
            </div>

            <p>
              {project.architecture}
            </p>

          </section>

          {/* FEATURES */}

          <section className="case-section">

            <div className="case-section-heading">
              <span>02</span>
              <h3>Key Features</h3>
            </div>

            <div className="case-feature-grid">

              {project.features.map((feature, index) => (
                <div
                  className="case-feature"
                  key={index}
                >

                  <span className="case-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{feature}</p>

                </div>
              ))}

            </div>

          </section>

          {/* MODULES */}

          <section className="case-section">

            <div className="case-section-heading">
              <span>03</span>
              <h3>Core Modules</h3>
            </div>

            <div className="case-tags">

              {project.modules.map((module) => (
                <span key={module}>
                  {module}
                </span>
              ))}

            </div>

          </section>

          {/* TECHNOLOGIES */}

          <section className="case-section">

            <div className="case-section-heading">
              <span>04</span>
              <h3>Technology Stack</h3>
            </div>

            <div className="case-tags tech-tags">

              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

          </section>

          {/* CONTRIBUTION */}

          <section className="case-section contribution">

            <div className="case-section-heading">
              <span>05</span>
              <h3>My Contribution</h3>
            </div>

            <p>
              {project.contribution}
            </p>

          </section>

        </div>

        {/* MODAL FOOTER */}

        <div className="case-modal-footer">

          <span>
            ENGINEERED WITH PURPOSE.
          </span>

          <button
            type="button"
            onClick={onClose}
          >
            ← Back to Projects
          </button>

        </div>

      </article>

    </div>
  );
}

/* PROJECTS SECTION */

export default function ProjectsSection() {

  const [activeProject, setActiveProject] = useState(null);

  const closeProject = () => {
    setActiveProject(null);
  };

  return (
    <section
      className="projects-section"
      id="projects"
    >

      <div className="projects-container">

        {/* SECTION HEADING */}

        <div className="projects-heading">

          <div>

            <p className="projects-eyebrow">
              03 / SELECTED ENGINEERING WORK
            </p>

            <h2>
              Beyond code.
              <br />
              <span>Built to solve problems.</span>
            </h2>

            <p className="projects-intro">
              A closer look at the applications, backend
              systems and digital products I've worked on.
            </p>

          </div>


        </div>

        {/* THREE PROJECT CARDS */}

        <div className="projects-list">

          {projects.map((project) => (

            <article
              className={`project-showcase project-${project.type}`}
              key={project.id}
            >

              <div className="project-number">
                {project.id}
              </div>

              <div className="project-details">

                <div className="project-meta">

                  <span>
                    {project.category}
                  </span>

                  <span>
                    {project.status}
                  </span>

                </div>

                <h3>
                  {project.name}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                  {project.technologies.length > 4 && (
                    <span>
                      +{project.technologies.length - 4}
                    </span>
                  )}

                </div>

                <button
                  type="button"
                  className="explore-project"
                  onClick={() => setActiveProject(project)}
                >
                  Explore Case Study
                  <span>↗</span>
                </button>

              </div>

            </article>

          ))}

        </div>

        {/* BOTTOM TEXT */}

        <div className="projects-bottom">

          <span>
            DESIGNED WITH PURPOSE. DEVELOPED WITH PRECISION.
          </span>

          <span>
            JAVA BACKEND · FULL STACK · ENGINEERING
          </span>

        </div>

      </div>

      {/* CENTERED PROJECT CASE STUDY */}

      {activeProject && (
        <ProjectDetails
          project={activeProject}
          onClose={closeProject}
        />
      )}

    </section>
  );
}
