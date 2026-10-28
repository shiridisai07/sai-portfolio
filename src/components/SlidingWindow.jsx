import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, CheckCircle2, Layers } from "lucide-react";
import { Github } from "./Icons.jsx";

export default function SlidingWindow({ isOpen, onClose, data, type = "project" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="sliding-window-portal" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            className="sliding-window-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Sliding Window Panel */}
          <motion.aside
            className="sliding-window-panel"
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
          >
            {/* Top Bar */}
            <div className="sliding-window-header">
              <div className="sliding-window-meta">
                <span className="sliding-window-pill">
                  <Sparkles size={13} />
                  {type === "project"
                    ? data.category || "Project Inspector"
                    : data.issuer || "Verified Credential"}
                </span>
                {data.status && (
                  <span className="sliding-window-badge">
                    {data.status}
                  </span>
                )}
              </div>

              <button
                type="button"
                className="sliding-window-close"
                onClick={onClose}
                aria-label="Close sliding window"
              >
                <X size={20} />
              </button>
            </div>

            {/* Window Content */}
            <div className="sliding-window-body">
              <h2 className="sliding-window-title">
                {data.title || data.name}
              </h2>

              {data.subtitle && (
                <p className="sliding-window-subtitle">{data.subtitle}</p>
              )}

              {/* Description block */}
              <div className="sliding-window-section">
                <h4>Overview & Scope</h4>
                <p className="sliding-window-text">
                  {data.longDescription || data.description}
                </p>
              </div>

              {/* Features list */}
              {data.features && data.features.length > 0 && (
                <div className="sliding-window-section">
                  <h4>Core Capabilities & Features</h4>
                  <ul className="sliding-window-list">
                    {data.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="sliding-list-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Validated Skills */}
              {data.skillsValidated && (
                <div className="sliding-window-section">
                  <h4>Core Competencies Validated</h4>
                  <ul className="sliding-window-list">
                    {data.skillsValidated.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="sliding-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies / Tags */}
              {data.technologies && (
                <div className="sliding-window-section">
                  <h4>Tech Stack</h4>
                  <div className="tag-list">
                    {data.technologies.map((tech) => (
                      <span key={tech} className="tag tag-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture breakdown */}
              {data.architecture && (
                <div className="sliding-window-highlight-box">
                  <div className="arch-box-title">
                    <Layers size={14} />
                    <strong>Architecture:</strong>
                  </div>
                  <p>{data.architecture}</p>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="sliding-window-footer">
              {(data.demo || data.credentialUrl || data.link) && (
                <a
                  href={data.demo || data.credentialUrl || data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary sliding-action-btn"
                >
                  <span>
                    {type === "project"
                      ? "View Project Article / Demo"
                      : "Verify Official Credential"}
                  </span>
                  <ExternalLink size={16} />
                </a>
              )}

              {data.github && data.github !== "https://github.com/" && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary sliding-action-btn"
                >
                  <Github size={18} />
                  <span>GitHub Repository</span>
                </a>
              )}

              <button
                type="button"
                className="button button-ghost sliding-close-text-btn"
                onClick={onClose}
              >
                Close Window
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
