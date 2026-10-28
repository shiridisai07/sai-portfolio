import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  Cloud,
  Award,
  Maximize2,
  BookOpen,
} from "lucide-react";
import { experienceLearning } from "../data/portfolioData.js";
import SlidingWindow from "./SlidingWindow.jsx";

const iconMap = {
  "Cloud Computing": Cloud,
  "Academic Degree": GraduationCap,
  "Scholastic Distinction": Award,
  "Foundational Academics": BookOpen,
};

export default function Experience() {
  const [activeItem, setActiveItem] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const openInspector = (item) => {
    setActiveItem({
      title: item.title,
      subtitle: `${item.role} • ${item.organization}`,
      category: item.badge,
      description: item.description,
      skillsValidated: item.skills,
      featuredBadge: item.period,
      credentialUrl: item.credentialUrl || "",
    });
    setIsWindowOpen(true);
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">ACADEMIC & TECHNICAL MILESTONES</span>
          <h2>
            Experience & <span className="gradient-text">Learning</span>
          </h2>
          <p>
            Key educational milestones, technical cloud training programs, and academic excellence.
          </p>
        </div>

        <div className="timeline-vertical-track">
          {experienceLearning.map((item, index) => {
            const IconComponent = iconMap[item.badge] || BookOpen;
            return (
              <motion.article
                key={item.title}
                className="timeline-item-card modern-glass-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="timeline-node-marker">
                  <div className="timeline-marker-dot">
                    <IconComponent size={20} />
                  </div>
                  {index < experienceLearning.length - 1 && (
                    <div className="timeline-connecting-line" />
                  )}
                </div>

                <div className="timeline-item-content">
                  <div className="timeline-card-header">
                    <div className="timeline-header-badges">
                      <span className="timeline-badge primary">
                        {item.badge}
                      </span>
                      <span className="timeline-period">
                        <CalendarDays size={13} />
                        {item.period}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="timeline-inspect-btn clickable"
                      onClick={() => openInspector(item)}
                      title="Inspect details in sliding window"
                    >
                      <Maximize2 size={13} />
                      <span>Details</span>
                    </button>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-org">
                    {item.role} — <strong>{item.organization}</strong>
                  </p>
                  <p className="timeline-desc">{item.description}</p>

                  <div className="timeline-skills">
                    <span className="timeline-skills-label">Skills & Knowledge Acquired:</span>
                    <div className="tag-list">
                      {item.skills.map((skill) => (
                        <span key={skill} className="tag tag-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <SlidingWindow
        isOpen={isWindowOpen}
        onClose={() => setIsWindowOpen(false)}
        data={activeItem}
        type="experience"
      />
    </section>
  );
}
