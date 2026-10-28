import { motion } from "framer-motion";
import {
  GraduationCap,
  Cloud,
  Code2,
  Database,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { personalProfile } from "../data/portfolioData.js";

const aboutCards = [
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "KL University",
    description: `B.Tech in Computer Science & Engineering (CGPA: ${personalProfile.education.cgpa})`,
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    subtitle: "Java & Spring Boot",
    description: "Architecting structured RESTful APIs, MVC design, and Hibernate ORM integration",
  },
  {
    icon: Database,
    title: "Database Design",
    subtitle: "Relational Persistence",
    description: "Designing normalized relational schemas and optimized queries using MySQL",
  },
  {
    icon: Cloud,
    title: "Cloud Technologies",
    subtitle: "AWS & Google Cloud",
    description: "Certified Cloud Practitioner with foundational skills in Compute, Storage, and IAM",
  },
];

const pillars = [
  "Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming (Java, C, SQL).",
  "Hands-on project engineering using Spring Boot, Hibernate, MySQL, and modern React interfaces.",
  "Certified understanding of cloud architectures across Amazon Web Services (AWS) and Google Cloud.",
  "Systematic academic track record maintaining a 9.72 CGPA at KL University.",
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">ABOUT ME</span>
          <h2>
            Background & <span className="gradient-text">Profile</span>
          </h2>
          <p>
            An authentic overview of my education, technical focus, and programming approach.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Narrative */}
          <motion.div
            className="about-story modern-glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-story-header">
              <span className="badge-pill">
                <Sparkles size={14} />
                Computer Science Student
              </span>
              <h3>Building reliable, scalable software solutions.</h3>
            </div>

            <p className="about-text">
              I am <strong>{personalProfile.name}</strong>, a Computer Science and Engineering student at <strong>{personalProfile.education.fullInstitution}</strong> maintaining an academic standing of <strong>{personalProfile.education.cgpa} CGPA</strong>.
            </p>

            <p className="about-text">
              My technical journey centers on software development, backend systems, database design, and cloud technologies. I enjoy understanding the core mechanics of computing—from algorithmic efficiency in <strong>Java and C</strong> to designing robust <strong>RESTful APIs with Spring Boot</strong> and relational schemas in <strong>MySQL</strong>.
            </p>

            <p className="about-text">
              Through collaborative academic projects and self-driven explorations, I approach software engineering with an emphasis on code maintainability, clean separation of concerns, and continuous learning.
            </p>

            <div className="about-pillars">
              <h4>Key Capabilities:</h4>
              <ul className="about-pillars-list">
                {pillars.map((pillar, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} className="pillar-check-icon" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Cards Column */}
          <div className="about-cards-column">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  className="info-card modern-glass-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="info-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <span className="info-subtitle">{card.subtitle}</span>
                    <h4 className="info-title">{card.title}</h4>
                    <p className="info-desc">{card.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
