import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Server,
  Layout,
  Cloud,
  Wrench,
  Database,
  Compass,
  Sparkles,
  Layers,
} from "lucide-react";
import { skillCategories, currentlyExploring } from "../data/portfolioData.js";

const iconMap = {
  code: Code2,
  cpu: Cpu,
  server: Server,
  layout: Layout,
  cloud: Cloud,
  tool: Wrench,
  database: Database,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryNames = ["All", ...skillCategories.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <div className="skills-container">
      {/* Category Filter Sliding Tabs */}
      <div className="skills-filter-wrapper">
        <div className="skills-filter-bar" role="tablist" aria-label="Skill Categories">
          {categoryNames.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`skills-tab ${isActive ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="skills-tab-active-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="skills-tab-text">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Categorized Skill Cards */}
      <motion.div layout className="skills-grid">
        <AnimatePresence mode="popLayout">
          {displayedCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <motion.article
                layout
                className="skill-card modern-glass-card"
                key={category.title}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <div className="skill-heading">
                  <div className="skill-icon-wrap">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <span className="skill-badge">Domain</span>
                    <h3 className="skill-title">{category.title}</h3>
                  </div>
                </div>

                <div className="tag-list">
                  {category.skills.map((skill) => (
                    <motion.span
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="tag skill-tag"
                      key={skill}
                    >
                      <Sparkles size={12} className="tag-sparkle" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Compact "Currently Exploring" Section */}
      <div className="currently-exploring-card modern-glass-card">
        <div className="exploring-header">
          <div className="exploring-icon-box">
            <Compass size={22} />
          </div>
          <div>
            <span className="exploring-badge">Active Learning</span>
            <h4 className="exploring-title">Currently Exploring</h4>
          </div>
        </div>

        <p className="exploring-desc">
          Actively reading documentation, experimenting with prototypes, and deepening conceptual knowledge in:
        </p>

        <div className="tag-list exploring-tags">
          {currentlyExploring.map((topic) => (
            <span key={topic} className="tag tag-accent">
              <Sparkles size={12} />
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Structured Summary Pill */}
      <div className="skills-stat-summary">
        <Layers size={16} />
        <span>
          Organized into <strong>{skillCategories.length} core domains</strong> covering <strong>21 verified technical proficiencies</strong>.
        </span>
      </div>
    </div>
  );
}
