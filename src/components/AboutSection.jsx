
import { motion } from "framer-motion";

import {
  FaReact,
  FaDatabase,
  FaServer,
  FaGraduationCap,
  FaSchool
} from "react-icons/fa";

import "./AboutSection.css";

const education = [
  {
    number: "01",
    qualification: "B.Tech",
    stream: "Computer Science Engineering",
    institution: "R.R.S. Dinkar College of Engineering, Begusarai",
    university: "Bihar Engineering University",
    duration: "2021 – 2025",
    result: "8.85 / 10 CGPA",
    icon: <FaGraduationCap />,
    featured: true
  },
  {
    number: "02",
    qualification: "Class XII",
    stream: "Science",
    institution: "P.T.B. High School, Muzaffarpur",
    university: "Senior Secondary Education",
    duration: "2021",
    result: "83.8%",
    icon: <FaSchool />
  },
  {
    number: "03",
    qualification: "Class X",
    stream: "Secondary Education",
    institution: "Prabhat Tara Girls H.S., Muzaffarpur",
    university: "Secondary Education",
    duration: "2019",
    result: "81.2%",
    icon: <FaSchool />
  }
];

const skillGroups = [
  {
    number: "01",
    title: "Backend Development",
    description: "Building secure and scalable backend applications.",
    icon: <FaServer />,
    skills: [
      "Java 8 / 11 / 17 / 21",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate",
      "JPA",
      "RESTful APIs",
      "Microservices"
    ]
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Developing responsive and engaging interfaces.",
    icon: <FaReact />,
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design"
    ]
  },
  {
    number: "03",
    title: "Database & Tools",
    description: "Managing data and modern development workflows.",
    icon: <FaDatabase />,
    skills: [
      "MySQL",
      "Oracle SQL",
      "PL/SQL",
      "Redis",
      "Kafka",
      "Git & GitHub",
      "Maven",
      "Jenkins",
      "Postman"
    ]
  }
];

const highlights = [
  {
    value: "8.85/10",
    label: "ACADEMIC CGPA"
  },
  {
    value: "2025",
    label: "GRADUATION YEAR"
  },
  {
    value: "JAVA + FULL STACK",
    label: "DEVELOPMENT FOCUS"
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
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut"
    }
  }
};

export default function AboutSection() {
  return (
    <section className="about-section" id="about">

      <div className="about-intro-panel">

        <motion.div
          className="about-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>
            A little about <span>who I am.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="about-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >

          <motion.div
            className="about-main"
            variants={itemVariants}
          >
            <span className="about-label">
              WHO IS NISHA?
            </span>

            <h3>
              Building solutions with
              <span> logic & creativity.</span>
            </h3>

            <p>
              I'm Nisha Kumari, a Computer Science Engineering
              graduate and Java Backend & Full Stack Developer.
              I enjoy developing scalable applications, designing
              secure REST APIs and creating user-friendly
              digital experiences.
            </p>

            <p>
              My technical interests include Java, Spring Boot,
              Spring Security, React, database management and
              modern web technologies. I enjoy solving real-world
              problems through clean architecture and efficient code.
            </p>
          </motion.div>

          <motion.div
            className="education-grid"
            variants={containerVariants}
          >
            {education.map((item) => (
              <motion.article
                className={`education-card ${item.featured ? "education-featured" : ""}`}
                key={item.number}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.25 }
                }}
              >
                <div className="education-icon">
                  {item.icon}
                </div>

                <div className="education-info">

                  <div className="education-card-top">
                    <span className="education-label">
                      {item.qualification}
                    </span>

                    <span className="education-number">
                      {item.number}
                    </span>
                  </div>

                  <h4>{item.stream}</h4>

                  <p className="education-institution">
                    {item.institution}
                  </p>

                  <p className="education-university">
                    {item.university}
                  </p>

                  <div className="education-bottom">
                    <span>{item.duration}</span>
                    <strong>{item.result}</strong>
                  </div>

                </div>
              </motion.article>
            ))}
          </motion.div>

        </motion.div>
      </div>

      <div className="technical-skills" id="skills">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="about-label">
              MY TECHNICAL EXPERTISE
            </span>

            <h3>
              Technologies I work with.
            </h3>

            <p>
              Tools and technologies I use to build
              reliable digital products.
            </p>
          </div>

          
        </motion.div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {skillGroups.map((group) => (
            <motion.article
              className="skill-category"
              key={group.number}
              variants={itemVariants}
              whileHover={{
                y: -7,
                transition: { duration: 0.25 }
              }}
            >
              <div className="skill-category-top">
                <div className="skill-category-icon">
                  {group.icon}
                </div>

                <span>{group.number}</span>
              </div>

              <h4>{group.title}</h4>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="about-highlights"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {highlights.map((item) => (
          <motion.div
            className="highlight-item"
            key={item.label}
            variants={itemVariants}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
