import { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal as TerminalIcon,
  ExternalLink,
  BookOpen,
  CornerDownLeft,
} from "lucide-react";
import { Github } from "./Icons.jsx";
import { personalProfile, projects, skillCategories } from "../data/portfolioData.js";

const DEFAULT_COMMANDS = {
  help: [
    "Available commands:",
    "  whoami    - Displays personal summary & current university status",
    "  skills    - Lists technical domains and primary programming languages",
    "  projects  - Shows key featured projects and their status",
    "  education - Displays university and academic achievement",
    "  contact   - Displays verified email, phone, and social links",
    "  clear     - Clears the terminal screen",
  ],
  whoami: [
    `${personalProfile.name}`,
    `Role: ${personalProfile.title}`,
    `Education: ${personalProfile.education.degree} at ${personalProfile.education.institution}`,
    `Status: ${personalProfile.availabilityText}`,
  ],
  skills: [
    "Core Technical Stack:",
    "  • Languages: Java, C, JavaScript, SQL",
    "  • Backend: Spring Boot, REST APIs, Hibernate",
    "  • Databases: MySQL",
    "  • Cloud & DevOps: AWS, Google Cloud",
    "  • CS Fundamentals: Data Structures & Algorithms, OOP, DBMS",
  ],
  projects: [
    "Featured Projects:",
    ...projects.map(
      (p) => `  [${p.isCompleted ? "COMPLETED" : "IN PROGRESS"}] ${p.title} - ${p.category}`
    ),
  ],
  education: [
    `Institution: ${personalProfile.education.fullInstitution}`,
    `Degree: ${personalProfile.education.degree}`,
    `CGPA: ${personalProfile.education.cgpa} (Verified)`,
    `Intermediate: 97.1% (NRI Junior College)`,
  ],
  contact: [
    `Email: ${personalProfile.email}`,
    `Phone: ${personalProfile.phone}`,
    `LinkedIn: ${personalProfile.linkedin}`,
    `GitHub: ${personalProfile.github}`,
  ],
};

export default function DeveloperTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    {
      command: "welcome",
      output: [
        "Welcome to Sai's interactive developer terminal [v1.0.0].",
        "Type 'help' to view available commands.",
      ],
    },
  ]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputVal.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const output = DEFAULT_COMMANDS[trimmed] || [
      `Command not recognized: '${trimmed}'. Type 'help' for available commands.`,
    ];

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInputVal("");
  };

  return (
    <section id="terminal" className="section terminal-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">DEVELOPER CLI & GITHUB</span>
          <h2>
            Interactive <span className="gradient-text">Terminal</span>
          </h2>
          <p>
            Explore my developer profile, tech stack, and project directory through an interactive terminal interface.
          </p>
        </div>

        <div className="terminal-dual-grid">
          {/* Left: GitHub Profile Card */}
          <motion.div
            className="github-profile-panel modern-glass-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="github-panel-header">
              <div className="github-avatar-box">
                <Github size={28} />
              </div>
              <div>
                <span className="github-label">Version Control</span>
                <h3 className="github-name">{personalProfile.name}</h3>
                <p className="github-handle">@chinnam-shiridi-sai</p>
              </div>
            </div>

            <p className="github-bio">
              Computer Science student building academic full-stack systems, Spring Boot microservices, and cloud architectures.
            </p>

            <div className="github-stats-row">
              <div className="gh-stat-box">
                <span className="gh-stat-num">{projects.length}</span>
                <span className="gh-stat-lbl">Projects</span>
              </div>
              <div className="gh-stat-box">
                <span className="gh-stat-num">{skillCategories.length}</span>
                <span className="gh-stat-lbl">Tech Domains</span>
              </div>
              <div className="gh-stat-box">
                <span className="gh-stat-num">{personalProfile.education.cgpa}</span>
                <span className="gh-stat-lbl">CGPA</span>
              </div>
            </div>

            <div className="github-repos-preview">
              <h4>Highlighted Repositories:</h4>
              <div className="gh-repo-item">
                <div className="gh-repo-title-row">
                  <BookOpen size={15} />
                  <strong>Student-Management-System</strong>
                </div>
                <p>Full-stack student work & study management web application.</p>
                <span className="tag tag-sm">Java • Spring Boot • MySQL</span>
              </div>

              <div className="gh-repo-item">
                <div className="gh-repo-title-row">
                  <BookOpen size={15} />
                  <strong>EduTrack</strong>
                </div>
                <p>Academic management and assignment submission system.</p>
                <span className="tag tag-sm">HTML5 • CSS3 • JavaScript</span>
              </div>

              <div className="gh-repo-item">
                <div className="gh-repo-title-row">
                  <BookOpen size={15} />
                  <strong>VoltGrid</strong>
                </div>
                <p>Microservices EV charging station load balancer.</p>
                <span className="tag tag-sm">Spring Cloud • Netflix Eureka</span>
              </div>
            </div>

            <a
              href={personalProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary gh-profile-link-btn"
            >
              <Github size={17} />
              <span>Explore Repositories on GitHub</span>
              <ExternalLink size={15} />
            </a>
          </motion.div>

          {/* Right: Interactive Terminal Interface */}
          <motion.div
            className="terminal-shell-card modern-glass-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="terminal-chrome-header">
              <div className="terminal-dots">
                <span className="term-dot red" />
                <span className="term-dot yellow" />
                <span className="term-dot green" />
              </div>
              <div className="terminal-title-pill">
                <TerminalIcon size={13} />
                <span>sai@portfolio: ~/profile</span>
              </div>
              <span className="terminal-status-indicator">● online</span>
            </div>

            <div className="terminal-body-output">
              {history.map((entry, idx) => (
                <div key={idx} className="terminal-entry">
                  <div className="terminal-prompt-line">
                    <span className="term-user">sai@kluniversity</span>
                    <span className="term-colon">:</span>
                    <span className="term-path">~</span>
                    <span className="term-dollar">$</span>
                    <span className="term-entered-cmd">{entry.command}</span>
                  </div>
                  <div className="terminal-response">
                    {entry.output.map((line, lIdx) => (
                      <p key={lIdx} className="terminal-line">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Command Input Form */}
            <form onSubmit={handleCommandSubmit} className="terminal-input-form">
              <span className="term-user">sai@kluniversity</span>
              <span className="term-dollar">$</span>
              <input
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'whoami', 'skills', 'projects', 'help'..."
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit" className="terminal-submit-btn" aria-label="Run command">
                <CornerDownLeft size={14} />
              </button>
            </form>

            <div className="terminal-quick-hints">
              <span className="hint-label">Quick commands:</span>
              {["whoami", "skills", "projects", "education", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  className="hint-pill"
                  onClick={() => {
                    const output = DEFAULT_COMMANDS[cmd] || [];
                    if (cmd === "clear") {
                      setHistory([]);
                    } else {
                      setHistory((prev) => [...prev, { command: cmd, output }]);
                    }
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
