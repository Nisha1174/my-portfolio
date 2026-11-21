
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import CustomCursor from "./components/CustomCursor";
import FloatingScene from "./components/FloatingScene";
import TechStackStrip from "./components/TechStackStrip";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

import avatar from "./assets/nisha-avatar.png";

import "./App.css";
import "./components/FloatingScene.css";

const GITHUB = "https://github.com/Nisha1174";

const LINKEDIN =
  "https://www.linkedin.com/in/nisha-kumari-628681244/";

export default function App() {
  return (
    <main className="portfolio">

      <CustomCursor />

      {/* NAVIGATION */}
      <nav className="navbar">

        <a href="#home" className="logo">
          NISHA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk ↗
        </a>

      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">

        {/* Background Scene */}
        <div className="floating-scene">
          <FloatingScene />
        </div>

        <div className="hero-background-name">
          NISHA
        </div>

        {/* Hero Introduction */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <p className="hello">
            HELLO, I'M
          </p>

          <p className="name-small">
            NISHA KUMARI
          </p>

          <h1>
            Java Backend &
            <br />
            Full Stack
            <br />
            Developer.
          </h1>

          <p className="hero-description">
            I build scalable applications, secure backend
            systems and meaningful digital experiences
            through clean and efficient code.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="work-button"
            >
              View Selected Work ↗
            </a>

            <a
              href="/resume.pdf"
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume ↓
            </a>

          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href={GITHUB}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href={LINKEDIN}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </motion.div>

        {/* Professional Photograph */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >

          <div className="image-decoration"></div>

          <img
            src={avatar}
            alt="Nisha Kumari - Java Backend and Full Stack Developer"
          />

        </motion.div>

      </section>

      {/* TECHNOLOGY STRIP */}
      <TechStackStrip />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* PROFESSIONAL EXPERIENCE */}
      <ExperienceSection />

      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Nisha Kumari. Designed & Developed with React.
      </footer>

    </main>
  );
}
