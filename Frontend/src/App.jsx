import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">Chanchal</div>

        {/* Hamburger Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>

          <li>
            <a href="#certificates" onClick={closeMenu}>
              Certificates
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

        </ul>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <p className="hero-small">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Chanchal</span>
        </h1>

        <p className="hero-description">
          A Computer Science student passionate about Full Stack Development
          and building useful web applications.
        </p>

        <a href="#projects" className="hero-button">
          View My Projects
        </a>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="projects-section" id="projects">

        <h2>My Projects</h2>

        <div className="projects-container">

          {projects.length === 0 ? (
            <p>No projects found.</p>
          ) : (

            projects
              .filter((project) =>
                [
                  "My Portfolio Website",
                  "Text-to-Speech Web Application",
                  "Blog Website",
                  "60-Second Escape Room"
                ].includes(project.title)
              )
              .slice(0, 4)
              .map((project) => (

                <div className="project-card" key={project.id}>

                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="project-image"
                    />
                  )}

                  <h3>{project.title}</h3>

                  <p>
                    {project.description}
                  </p>

                  <p className="technologies">
                    <strong>Technologies:</strong>{" "}
                    {project.technologies}
                  </p>

                  <div className="project-links">

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

              ))

          )}

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-section" id="about">

        <h2>About Me</h2>

        <p>
          I am a Computer Science student interested in Full Stack
          Development. I enjoy creating modern web applications using
          technologies such as React, Spring Boot and MySQL.
        </p>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="skills-section" id="skills">

        <h2>My Skills</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Java, Spring Boot, REST APIs</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MySQL, SQL</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, IntelliJ IDEA</p>
          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="experience-section" id="experience">

        <h2>Experience</h2>

        <div className="experience-container">

          <div className="experience-card">

            <h3>Internship Experience</h3>

            <h4>Full Stack Development Intern</h4>

            <p>
              Worked on web development projects and gained practical
              experience in frontend and backend technologies.
            </p>

            <p className="technologies">
              <strong>Technologies:</strong>{" "}
              React, Java, Spring Boot, MySQL
            </p>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATES ================= */}

      <section
        className="certificates-section"
        id="certificates"
      >

        <h2>Certificates</h2>

        <div className="certificates-container">

          <div className="certificate-card">

            <h3>Full Stack Development</h3>

            <p>
              Certificate in Full Stack Development.
            </p>

          </div>

          <div className="certificate-card">

            <h3>Web Development</h3>

            <p>
              Certificate in Web Development.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact-section" id="contact">

        <h2>Contact Me</h2>

        <p className="contact-intro">
          Interested in working together or have an opportunity for me?
          Feel free to get in touch.
        </p>

        <div className="contact-links">

          <a href="mailto:chanchalmathur@gmail.com">
            Email
          </a>

          <a
            href="https://github.com/MathurChanchal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chanchal-mathur-821b80383"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <p>
          © 2026 Chanchal. All Rights Reserved.
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#projects">Projects</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>

        </div>

      </footer>

    </div>
  );
}

export default App;