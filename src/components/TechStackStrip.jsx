
import "./TechStackStrip.css";

const technologies = [
  { name: "Java", icon: "java/java-original.svg" },
  { name: "Spring Boot", icon: "spring/spring-original.svg" },
  { name: "Spring Security", icon: "spring/spring-original.svg" },
  { name: "Hibernate", icon: "hibernate/hibernate-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "React", icon: "react/react-original.svg" },
  { name: "HTML5", icon: "html5/html5-original.svg" },
  { name: "CSS3", icon: "css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
  { name: "Python", icon: "python/python-original.svg" },
  { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
  { name: "Git", icon: "git/git-original.svg" },
  { name: "GitHub", icon: "github/github-original.svg" },
  { name: "VS Code", icon: "vscode/vscode-original.svg" },
  { name: "Postman", icon: "postman/postman-original.svg" },
  { name: "Figma", icon: "figma/figma-original.svg" }
];

const DEVICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

export default function TechStackStrip() {
  return (
    <section className="tech-marquee">

      <div className="marquee-heading">
        <span>TECHNOLOGIES I WORK WITH</span>
      </div>

      <div className="marquee-wrapper">

        <div className="marquee-track">

          {[1, 2].map((group) => (
            <div
              className="marquee-group"
              key={group}
              aria-hidden={group === 2}
            >
              {technologies.map((tech) => (
                <div
                  className="marquee-item"
                  key={tech.name}
                  title={tech.name}
                >
                  <img
                    src={`${DEVICON}${tech.icon}`}
                    alt={group === 1 ? tech.name : ""}
                    loading="lazy"
                  />

                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
