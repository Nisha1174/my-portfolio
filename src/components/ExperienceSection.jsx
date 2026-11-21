
import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaCode,
  FaJava,
  FaCheckCircle,
  FaGraduationCap,
  FaExternalLinkAlt
} from "react-icons/fa";

import "./ExperienceSection.css";

const technologies = [
  "Java 21",
  "Spring Boot",
  "Spring Security",
  "JWT",
  "Spring Data JPA",
  "Hibernate",
  "MySQL",
  "React.js",
  "REST APIs",
  "Maven"
];

const projects = [
  {
    number: "01",
    name: "Mechanical Inspection System",
    category: "Mechanical Quality Management",
    description:
      "Contributed to a web-based inspection management system involving product management, inspection workflows, measurement tracking and role-based dashboards.",
    stack: ["Java", "Spring Boot", "MySQL", "React.js"]
  },
  {
    number: "02",
    name: "Samriddhi Financial Services",
    category: "Financial Services Backend",
    description:
      "Worked on backend development for an administrative platform, including authentication, role-based access and business data management.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL"
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-container">

        <motion.div
          className="experience-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p
            className="experience-eyebrow"
            variants={itemVariants}
          >
            03 / PROFESSIONAL JOURNEY
          </motion.p>

          <motion.h2 variants={itemVariants}>
            Experience that
            <br />
            <span>builds expertise.</span>
          </motion.h2>

          <motion.p
            className="experience-subtitle"
            variants={itemVariants}
          >
            My professional journey, technical contributions
            and experience building real-world applications.
          </motion.p>
        </motion.div>

        <div className="experience-timeline">

          <div className="timeline-line"></div>

          {/* EXPERIENCE 01 - SOFTSYNTH */}

          <motion.div
            className="experience-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="timeline-marker">
              <FaBriefcase />
            </div>

            <div className="experience-card-header">

              <div className="company-icon">
                <FaJava />
              </div>

              <div className="experience-company-info">

                <div className="experience-status">
                  <span className="experience-status-dot"></span>
                  CURRENT POSITION
                </div>

                <h3>
                  Java Full Stack Software Developer Intern
                </h3>

                <h4>
                  Softsynth Software Solution
                </h4>

              </div>

              <div className="experience-duration">
                <FaCalendarAlt />
                June 2026 – Present
              </div>

            </div>

            <div className="experience-divider"></div>

            <div className="experience-details">

              <h4>Role & Responsibilities</h4>

              <ul>
                <li>
                  Developing backend applications using Java
                  and Spring Boot.
                </li>

                <li>
                  Building REST APIs and implementing
                  authentication and authorization using
                  Spring Security and JWT.
                </li>

                <li>
                  Working with MySQL, Hibernate and
                  Spring Data JPA for database operations.
                </li>

                <li>
                  Contributing to full-stack application
                  development and frontend-backend integration.
                </li>

                <li>
                  Developing and maintaining real-world
                  software projects.
                </li>
              </ul>

            </div>

            <div className="experience-tech">

              <h4>TECHNOLOGIES USED</h4>

              <div className="experience-tags">
                {technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

            </div>

            <div className="experience-projects">

              <div className="experience-projects-heading">
                <FaCode />
                <h4>PROJECT CONTRIBUTIONS</h4>
              </div>

              <div className="experience-project-grid">

                {projects.map((project) => (
                  <motion.article
                    className="experience-project"
                    key={project.number}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="project-number">
                      {project.number}
                    </span>

                    <h5>{project.name}</h5>

                    <span className="project-category">
                      {project.category}
                    </span>

                    <p>{project.description}</p>

                    <div className="project-stack">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </motion.article>
                ))}

              </div>

            </div>

            <div className="experience-footer">

              <div>
                <FaCheckCircle />
                <span>Currently working</span>
              </div>

              <span className="experience-location">
                Software Development
              </span>

            </div>

          </motion.div>

          {/* EXPERIENCE 02 - PANCHWATIX */}

          <motion.div
            className="experience-card experience-card-light"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="timeline-marker timeline-marker-light">
              <FaCode />
            </div>

            <div className="experience-card-header">

             <div className="timeline-marker">
              <FaBriefcase />
            </div>

              <div className="experience-company-info">

                <div className="experience-status experience-status-light">
                  PREVIOUS EXPERIENCE
                </div>

                <h3>
                  ReactJS Developer
                </h3>

                <h4>
                  Panchwatix
                </h4>

              </div>

              <div className="experience-duration experience-duration-light">
                <FaCalendarAlt />
                Jan 2026 – Jul 2026
              </div>

            </div>

            <div className="experience-divider"></div>

            <div className="experience-details">

              <h4>Training & Professional Experience</h4>

              <div className="panchwatix-period">

                <div className="panchwatix-period-icon">
                  <FaGraduationCap />
                </div>

                <div>
                  <h5>ReactJS & Frontend Development Training</h5>
                  <span>January 2026 – March 2026</span>
                  <p>
                    Completed structured training covering ReactJS,
                    frontend development, component-based application
                    structure, practical exercises and supervised assignments.
                  </p>
                </div>

              </div>

              <div className="panchwatix-period">

                <div className="panchwatix-period-icon">
                  <FaBriefcase />
                </div>

                <div>
                  <h5>ReactJS Developer</h5>
                  <span>April 2026 – June 2026</span>
                  <p>
                    Contributed to frontend development and project-support
                    activities, including:
                  </p>

                  <ul>
                    <li>
                      Developing and updating ReactJS components.
                    </li>

                    <li>
                      Implementing responsive user interfaces.
                    </li>

                    <li>
                      Applying UI design changes and fixing interface issues.
                    </li>

                    <li>
                      Performing basic testing and assisting with
                      routine website updates.
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            <div className="experience-tech experience-tech-light">

              <h4>TECHNOLOGIES & SKILLS</h4>

              <div className="experience-tags experience-tags-light">
                {[
                  "ReactJS",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "Responsive UI",
                  "Component-Based Development",
                  "Frontend Testing"
                ].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

            </div>

            <div className="panchwatix-certificate">

              <div>
                <FaCheckCircle />
                <span>Training & Experience Certificate</span>
              </div>

              <a
                href="/panchwatix-experience-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
                <FaExternalLinkAlt />
              </a>

            </div>

            <div className="experience-footer experience-footer-light">

              <div>
                <FaCheckCircle />
                <span>Experience completed</span>
              </div>

              <span className="experience-location">
                Frontend Development
              </span>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
