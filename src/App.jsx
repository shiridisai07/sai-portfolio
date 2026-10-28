import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Certifications from "./components/Certifications.jsx";
import TechnicalHighlights from "./components/TechnicalHighlights.jsx";
import DeveloperTerminal from "./components/DeveloperTerminal.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import DynamicBackground from "./components/DynamicBackground.jsx";

import "./App.css";

const BLOCKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Technical Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience & Learning" },
  { id: "certifications", label: "Certifications" },
  { id: "highlights", label: "Achievements & Highlights" },
  { id: "terminal", label: "Interactive Terminal" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [activeBlock, setActiveBlock] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && BLOCKS.some((b) => b.id === hash)) {
        return hash;
      }
    }
    return "home";
  });
  const [viewMode, setViewMode] = useState("scroll"); // "scroll" | "pages"

  // Listen to hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && BLOCKS.some((b) => b.id === hash)) {
        setActiveBlock(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectBlock = (id) => {
    setActiveBlock(id);
    if (viewMode === "scroll") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleViewMode = () => {
    const newMode = viewMode === "scroll" ? "pages" : "scroll";
    setViewMode(newMode);
    if (newMode === "scroll") {
      setTimeout(() => {
        const el = document.getElementById(activeBlock);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentIndex = BLOCKS.findIndex((b) => b.id === activeBlock);

  const goToNextBlock = () => {
    const nextIdx = (currentIndex + 1) % BLOCKS.length;
    handleSelectBlock(BLOCKS[nextIdx].id);
  };

  const goToPrevBlock = () => {
    const prevIdx = currentIndex === 0 ? BLOCKS.length - 1 : currentIndex - 1;
    handleSelectBlock(BLOCKS[prevIdx].id);
  };

  // Keyboard navigation for page view
  useEffect(() => {
    if (viewMode !== "pages") return;
    const handleKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") goToNextBlock();
      if (e.key === "ArrowLeft") goToPrevBlock();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="portfolio-app">
      {/* Custom Cursor */}
      <CustomCursor />
      <DynamicBackground />

      {/* Navigation Header */}
      <Navbar
        activeBlock={activeBlock}
        onSelectBlock={handleSelectBlock}
        viewMode={viewMode}
        onToggleViewMode={toggleViewMode}
      />

      {/* View Mode Mode Banner Pill */}
      <div className="view-mode-banner">
        <button
          type="button"
          className="view-mode-pill-btn"
          onClick={toggleViewMode}
          title="Toggle between separate dedicated pages and continuous scroll"
        >
          {viewMode === "pages" ? (
            <>
              <Layers size={14} />
              <span>Dedicated Page View: <strong>{BLOCKS[currentIndex]?.label}</strong> (Click to switch to Scroll)</span>
            </>
          ) : (
            <>
              <LayoutGrid size={14} />
              <span>Full Scroll View (Click for Dedicated Separate Block Pages)</span>
            </>
          )}
          <Sparkles size={12} className="banner-sparkle" />
        </button>
      </div>

      <main>
        {viewMode === "pages" ? (
          /* ========================================================
             DEDICATED SEPARATE PAGES VIEW (1 Block per Screen)
             ======================================================== */
          <div className="dedicated-page-view-container container">
            {/* Top Page Navigation Bar */}
            <div className="page-view-top-bar">
              <button
                type="button"
                className="page-nav-arrow-btn"
                onClick={goToPrevBlock}
                aria-label="Previous Page"
              >
                <ChevronLeft size={18} />
                <span>Previous Block</span>
              </button>

              <div className="page-view-indicator-pill">
                <span className="page-number-tag">
                  Page {currentIndex + 1} of {BLOCKS.length}
                </span>
                <span className="page-title-tag">{BLOCKS[currentIndex]?.label}</span>
              </div>

              <button
                type="button"
                className="page-nav-arrow-btn"
                onClick={goToNextBlock}
                aria-label="Next Page"
              >
                <span>Next Block</span>
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Quick Page Jump Pills */}
            <div className="page-jump-row">
              {BLOCKS.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  className={`page-jump-btn ${activeBlock === b.id ? "active" : ""}`}
                  onClick={() => handleSelectBlock(b.id)}
                >
                  {b.label}
                </button>
              ))}
            </div>

            {/* Render Only the Active Block Page with 3D Entrance */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBlock}
                className="dedicated-page-content"
                initial={{ opacity: 0, scale: 0.96, rotateX: 6 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.96, rotateX: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {activeBlock === "home" && <Hero />}

                {activeBlock === "about" && <About />}

                {activeBlock === "skills" && (
                  <section id="skills" className="section">
                    <div className="section-heading">
                      <span className="eyebrow">STRUCTURED COMPETENCIES</span>
                      <h2>
                        Technical <span className="gradient-text">Skills</span>
                      </h2>
                      <p>
                        Structured into categorized domains according to my verified curriculum, projects, and development practice.
                      </p>
                    </div>
                    <Skills />
                  </section>
                )}

                {activeBlock === "projects" && (
                  <section id="projects" className="section">
                    <div className="section-heading">
                      <span className="eyebrow">PRACTICAL IMPLEMENTATIONS</span>
                      <h2>
                        Featured <span className="gradient-text">Projects</span>
                      </h2>
                      <p>
                        Academic full-stack systems, microservices architectures, and software tools. Click any project to open the <strong>Sliding Window</strong> inspector.
                      </p>
                    </div>
                    <Projects />
                  </section>
                )}

                {activeBlock === "experience" && <Experience />}

                {activeBlock === "certifications" && (
                  <section id="certifications" className="section">
                    <div className="section-heading">
                      <span className="eyebrow">VERIFIED CREDENTIALS</span>
                      <h2>
                        Certifications & <span className="gradient-text">Credentials</span>
                      </h2>
                      <p>
                        Professional and vendor certifications across AWS, Oracle AI, Google Cloud, and data analytics.
                      </p>
                    </div>
                    <Certifications />
                  </section>
                )}

                {activeBlock === "highlights" && <TechnicalHighlights />}

                {activeBlock === "terminal" && <DeveloperTerminal />}

                {activeBlock === "contact" && <Contact />}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Next/Prev Pagination */}
            <div className="page-view-bottom-bar">
              <button
                type="button"
                className="button button-secondary"
                onClick={goToPrevBlock}
              >
                <ChevronLeft size={16} />
                <span>Previous Block</span>
              </button>

              <button
                type="button"
                className="button button-primary"
                onClick={goToNextBlock}
              >
                <span>Next Block</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================
             CONTINUOUS ALL-IN-ONE SCROLL VIEW
             ======================================================== */
          <>
            <Hero />
            <About />

            <section id="skills" className="section section-muted">
              <div className="container">
                <div className="section-heading">
                  <span className="eyebrow">STRUCTURED COMPETENCIES</span>
                  <h2>
                    Technical <span className="gradient-text">Skills</span>
                  </h2>
                  <p>
                    Structured into categorized domains according to my verified curriculum, projects, and development practice.
                  </p>
                </div>
                <Skills />
              </div>
            </section>

            <section id="projects" className="section">
              <div className="container">
                <div className="section-heading">
                  <span className="eyebrow">PRACTICAL IMPLEMENTATIONS</span>
                  <h2>
                    Featured <span className="gradient-text">Projects</span>
                  </h2>
                  <p>
                    Academic full-stack systems, microservices architectures, and software tools. Click any project to open the <strong>Sliding Window</strong> inspector.
                  </p>
                </div>
                <Projects />
              </div>
            </section>

            <Experience />

            <section id="certifications" className="section section-muted">
              <div className="container">
                <div className="section-heading">
                  <span className="eyebrow">VERIFIED CREDENTIALS</span>
                  <h2>
                    Certifications & <span className="gradient-text">Credentials</span>
                  </h2>
                  <p>
                    Professional and vendor certifications across AWS, Oracle AI, Google Cloud, and data analytics.
                  </p>
                </div>
                <Certifications />
              </div>
            </section>

            <TechnicalHighlights />
            <DeveloperTerminal />
            <Contact />
          </>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
