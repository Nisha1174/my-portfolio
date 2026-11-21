
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaArrowUpRightFromSquare,
  FaLocationDot,
  FaBriefcase
} from "react-icons/fa6";

import "./ContactSection.css";

const EMAIL = "nishamuz2004@gmail.com";
const GITHUB = "https://github.com/Nisha1174";
const LINKEDIN = "https://www.linkedin.com/in/nisha-kumari-628681244/";

export default function ContactSection() {
  const recruiterLinks = [
    {
      label: "EMAIL ADDRESS",
      title: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: <FaEnvelope />,
      external: false
    },
    {
      label: "LINKEDIN PROFILE",
      title: "Connect professionally",
      href: LINKEDIN,
      icon: <FaLinkedinIn />,
      external: true
    },
    {
      label: "GITHUB PORTFOLIO",
      title: "Explore my projects",
      href: GITHUB,
      icon: <FaGithub />,
      external: true
    }
  ];

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        
        {/* Main Content */}

        <div className="contact-layout">

          {/* Left: Professional Information */}

          <motion.div
            className="contact-professional"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="professional-status">
              <span className="status-dot"></span>
              OPEN TO RELEVANT OPPORTUNITIES
            </div>

            <h3>Nisha Kumari</h3>

            <p className="professional-role">
              Java Backend & Full Stack Developer
            </p>

            <p className="professional-description">
              Computer Science Engineering graduate
              passionate about developing scalable
              applications, secure REST APIs and
              efficient software solutions.
            </p>

            {/* Areas of Interest */}

            <div className="professional-focus">

              <p>AREAS OF INTEREST</p>

              <div className="focus-tags">
                <span>Java Development</span>
                <span>Spring Boot</span>
                <span>Spring Security</span>
                <span>REST APIs</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>MySQL</span>
                <span>Hibernate / JPA</span>
              </div>

            </div>

            {/* Location */}

            <div className="professional-location">
              <FaLocationDot />
              Delhi, India
            </div>

            {/* Social Links */}

            <div className="professional-socials">

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* Right: Recruiter Contact Card */}

          <motion.div
            className="recruiter-card"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="recruiter-card-header">

              <div>
                <span>FOR RECRUITERS & HIRING TEAMS</span>
                <h3>Let's discuss an opportunity.</h3>
              </div>

              <FaBriefcase />

            </div>

            {/* Fully Clickable Contact Rows */}

            <div className="recruiter-links">

              {recruiterLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="recruiter-contact-item"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  aria-label={`${item.label}: ${item.title}`}
                >

                  <div className="recruiter-icon">
                    {item.icon}
                  </div>

                  <div className="recruiter-contact-info">
                    <small>{item.label}</small>
                    <strong>{item.title}</strong>
                  </div>

                  <FaArrowUpRightFromSquare
                    className="contact-arrow"
                  />

                </motion.a>
              ))}

            </div>

            {/* Resume Download */}

            <div className="recruiter-resume">

              <div>
                <strong>My Resume</strong>
                <p>
                  Explore my experience, skills and projects.
                </p>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-download"
              >
                <FaDownload />
                Download CV
              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
