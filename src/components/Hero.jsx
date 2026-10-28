import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
  Phone,
  FileDown,
  Code2,
  Server,
  Cloud,
  Database,
  Layers,
} from "lucide-react";
import { Github, Linkedin } from "./Icons.jsx";
import {
  personalProfile,
  rotatingHeadlines,
  projects,
  certifications,
} from "../data/portfolioData.js";
import profileImg from "../assets/profile.jpg";
import ThreeDCard from "./ThreeDCard.jsx";

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Smooth rotating headline with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % rotatingHeadlines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: personalProfile.education.cgpa, label: "KL University CGPA" },
    { value: `${projects.length}`, label: "Featured Projects" },
    { value: `${certifications.length}`, label: "Verified Credentials" },
  ];

  const coreSkills = [
    "Java 17+",
    "Spring Boot",
    "REST APIs",
    "AWS Cloud",
    "MySQL",
    "React",
    "Data Structures",
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow hero-glow-one" />
      <div className="hero-background-glow hero-glow-two" />

      <div className="container hero-container">
        {/* Left Column: Introduction & CTA */}
        <div className="hero-content">
          {personalProfile.openToInternships && (
            <motion.div
              className="hero-availability"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero-availability-dot" />
              <span>{personalProfile.availabilityText}</span>
              <Sparkles size={14} className="sparkle-icon" />
            </motion.div>
          )}

          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <span className="hero-name-light">CHINNAM SHIRIDI</span>{" "}
            <span className="hero-name-gradient">SAI<span className="accent-dot">.</span></span>
          </motion.h1>

          {/* Animated Rotating Headline */}
          <div className="hero-headline-rotator-wrapper">
            <AnimatePresence mode="wait">
              <motion.h2
                key={rotatingHeadlines[headlineIndex]}
                className="hero-role-title"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {rotatingHeadlines[headlineIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalProfile.bio}
          </motion.p>

          <motion.div
            className="hero-location-tag"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <MapPin size={15} />
            <span>{personalProfile.location}</span>
          </motion.div>

          {/* Call-to-action buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="button button-primary">
              <span>View My Projects</span>
              <ArrowUpRight size={17} />
            </a>

            <a
              href={personalProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="CHINNAM_SHIRIDI_SAI_Resume.pdf"
              className="button button-secondary"
              title="Download official PDF resume"
            >
              <FileDown size={17} />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="button button-ghost">
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* HORIZONTAL Social Pill Dock - covers blank space */}
          <motion.div
            className="hero-social-strip"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <span className="social-strip-label">Connect:</span>
            <div className="social-pill-group">
              <a
                href={personalProfile.github || personalProfile.social?.github || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-pill-item"
                title="GitHub"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalProfile.linkedin || personalProfile.social?.linkedin || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-pill-item"
                title="LinkedIn"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalProfile.email}`}
                aria-label="Send email"
                className="social-pill-item"
                title="Email"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>

              <a
                href={`tel:${personalProfile.phone}`}
                aria-label="Call phone"
                className="social-pill-item"
                title="Phone"
              >
                <Phone size={16} />
                <span>+91 9989472522</span>
              </a>
            </div>
          </motion.div>

          {/* Horizontal Tech Highlights Ribbon - covers bottom blank space */}
          <motion.div
            className="hero-tech-strip"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="tech-strip-header">
              <Layers size={14} className="accent-icon" />
              <span>Core Stack:</span>
            </div>
            <div className="tech-strip-pills">
              {coreSkills.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium 3D Perspective Developer Identity Card */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className="hero-card-wrapper">
            {/* Floating Orbiting Tech Badges */}
            <motion.div
              className="floating-tech-badge badge-top-right"
              animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
            >
              <Server size={14} className="badge-icon-cyan" />
              <span>Spring Boot</span>
            </motion.div>

            <motion.div
              className="floating-tech-badge badge-top-left"
              animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.5 }}
            >
              <Code2 size={14} className="badge-icon-purple" />
              <span>Java 17+</span>
            </motion.div>

            <motion.div
              className="floating-tech-badge badge-bottom-right"
              animate={{ y: [0, 9, 0], rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            >
              <Cloud size={14} className="badge-icon-amber" />
              <span>AWS Cloud</span>
            </motion.div>

            <motion.div
              className="floating-tech-badge badge-bottom-left"
              animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut", delay: 1.5 }}
            >
              <Database size={14} className="badge-icon-emerald" />
              <span>MySQL</span>
            </motion.div>

            {/* 3D Perspective Tilt Card */}
            <ThreeDCard intensity={8} glare={true} className="hero-card-glass">
              <div className="hero-avatar-ring">
                {!imgError ? (
                  <img
                    src={profileImg}
                    alt={personalProfile.name}
                    className="hero-avatar-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="hero-avatar-initials">SS</div>
                )}
                <span className="hero-avatar-status-badge" title="Open to opportunities" />
              </div>

              <h3 className="hero-card-name">{personalProfile.name}</h3>
              <p className="hero-card-sub">
                {personalProfile.education.degree} • {personalProfile.education.institution}
              </p>

              <div className="hero-card-badge-row">
                <span className="hero-pill">{personalProfile.education.cgpa} CGPA</span>
                <span className="hero-pill accent">AWS Certified</span>
                <span className="hero-pill cyan">Full Stack & Cloud</span>
              </div>

              <div className="hero-card-divider" />

              {/* 3 Balanced Verified Stats */}
              <div className="hero-quick-stats">
                {stats.map((s) => (
                  <div key={s.label} className="quick-stat-item">
                    <div className="stat-number">{s.value}</div>
                    <div className="stat-caption">{s.label}</div>
                  </div>
                ))}
              </div>
            </ThreeDCard>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
        <span>Scroll to Explore</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}
