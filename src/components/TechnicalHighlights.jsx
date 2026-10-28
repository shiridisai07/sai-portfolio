import { motion } from "framer-motion";
import {
  GraduationCap,
  Cloud,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import { technicalHighlights } from "../data/portfolioData.js";

const iconMap = {
  "Academic Standing": GraduationCap,
  "Systems & Engineering": Cloud,
  "Software Methodology": Layers,
};

export default function TechnicalHighlights() {
  return (
    <section id="highlights" className="section highlights-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">VERIFIED MILESTONES</span>
          <h2>
            Achievements & <span className="gradient-text">Highlights</span>
          </h2>
          <p>
            Key academic accomplishments, cloud architectural milestones, and software development practices.
          </p>
        </div>

        <div className="highlights-grid">
          {technicalHighlights.map((item, index) => {
            const IconComponent = iconMap[item.category] || Sparkles;
            return (
              <motion.article
                className="highlight-card modern-glass-card"
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="highlight-top">
                  <div className="highlight-icon">
                    <IconComponent size={24} />
                  </div>
                  <span className="highlight-metric-badge">{item.metric}</span>
                </div>

                <span className="highlight-category">{item.category}</span>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>

                <ul className="highlight-bullets">
                  {item.points.map((pt, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="highlight-bullet-icon" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
