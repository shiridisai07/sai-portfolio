import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  FolderKanban,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { projects } from "../data/portfolioData.js";
import SlidingWindow from "./SlidingWindow.jsx";
import { Github } from "./Icons.jsx";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const filterOptions = ["All", "Frontend", "Full Stack", "DTI"];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "Frontend") return project.category.toLowerCase().includes("frontend");
    if (selectedFilter === "Full Stack") return project.category.toLowerCase().includes("full stack");
    if (selectedFilter === "DTI") return project.category.toLowerCase().includes("dti");
    return true;
  });

  const openInspector = (project) => {
    setActiveProject(project);
    setIsWindowOpen(true);
  };

  const closeInspector = () => {
    setIsWindowOpen(false);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  }, [filteredProjects.length]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isWindowOpen) return;
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isWindowOpen, nextSlide, prevSlide]);

  return (
    <>
      <div className="projects-container">
        {/* Filter Controls & Carousel Navigation Bar */}
        <div className="projects-toolbar">
          <div className="projects-filter-pills">
            <span className="filter-label">
              <SlidersHorizontal size={14} />
              Filter:
            </span>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-pill-btn ${selectedFilter === filter ? "active" : ""}`}
                onClick={() => {
                  setSelectedFilter(filter);
                  setCurrentIndex(0);
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="carousel-nav-controls">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous project"
              title="Previous project"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="carousel-pagination-text">
              {currentIndex + 1} / {filteredProjects.length}
            </span>

            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={nextSlide}
              aria-label="Next project"
              title="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Responsive Projects Grid / Carousel */}
        <div className="projects-grid" ref={carouselRef}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                className="project-card modern-glass-card"
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="project-top">
                  <div className="project-icon-box">
                    <FolderKanban size={24} />
                  </div>

                  <div className="project-badges">
                    <span
                      className={`project-status-badge ${
                        project.isCompleted ? "status-completed" : "status-development"
                      }`}
                    >
                      {project.isCompleted ? (
                        <>
                          <CheckCircle2 size={12} />
                          Completed
                        </>
                      ) : (
                        <>
                          <Clock size={12} />
                          In Development
                        </>
                      )}
                    </span>
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>

                {/* Clickable Title to open inspector */}
                <h3
                  className="project-title clickable-title"
                  onClick={() => openInspector(project)}
                  title="Click to view details in sliding window"
                >
                  {project.title}
                </h3>

                {project.subtitle && (
                  <p className="project-subtitle">{project.subtitle}</p>
                )}

                <p className="project-description">{project.description}</p>

                <div className="tag-list project-tags">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tag tag-more">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="project-card-footer">
                  <button
                    type="button"
                    className="project-inspect-btn clickable"
                    onClick={() => openInspector(project)}
                    aria-label={`Inspect ${project.title} details`}
                  >
                    <Maximize2 size={14} />
                    <span>View Details</span>
                  </button>

                  <div className="project-links">
                    {project.github && project.github !== "https://github.com/" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="icon-link-btn"
                        title="GitHub Repository"
                      >
                        <Github size={17} />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo / publication`}
                        className="icon-link-btn primary"
                        title="Live Publication"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Sliding Window Details Panel */}
      <SlidingWindow
        isOpen={isWindowOpen}
        onClose={closeInspector}
        data={activeProject}
        type="project"
      />
    </>
  );
}
