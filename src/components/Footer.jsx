import { ArrowUp, Mail, Code2 } from "lucide-react";
import { Github, Linkedin } from "./Icons.jsx";
import { personalProfile } from "../data/portfolioData.js";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience & Learning", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Highlights", href: "#highlights" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="#home" aria-label="Back to home">
              <span className="footer-logo-icon">
                <Code2 size={20} />
              </span>
              <span>
                {personalProfile.name}
              </span>
            </a>
            <p className="footer-bio">
              {personalProfile.title} at {personalProfile.education.institution}. Focused on building reliable software, designing scalable backend systems, and learning modern cloud architectures.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-links-grid">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-connect-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-links">
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <Github size={18} />
                <span>GitHub Repositories</span>
              </a>

              <a
                href={`mailto:${personalProfile.email}`}
                className="footer-social-btn"
                aria-label="Email"
              >
                <Mail size={18} />
                <span>{personalProfile.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personalProfile.name}. Built with React, Vite & Framer Motion.</p>

          <a href="#home" className="back-to-top-btn" aria-label="Scroll back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
