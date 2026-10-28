import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Code2, Sun, Moon, Send, LayoutGrid, Layers } from "lucide-react";
import useTheme from "../hooks/useTheme.js";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Highlights", id: "highlights" },
  { label: "Terminal", id: "terminal" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({
  activeBlock = "home",
  onSelectBlock,
  viewMode = "scroll",
  onToggleViewMode,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLinkClick(id) {
    if (onSelectBlock) {
      onSelectBlock(id);
    }
    setMenuOpen(false);
  }

  return (
    <header className={`navbar ${scrolled ? "nav-scrolled" : ""}`}>
      {/* Scroll Progress Bar at very top */}
      <motion.div
        className="nav-scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container nav-inner">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
        >
          <span className="brand-icon-box">
            <Code2 size={20} />
          </span>
          <span className="brand-text">
            SAI<span className="accent-text">.</span>
          </span>
        </a>

        {/* Right side controls */}
        <div className="nav-right-cluster">
          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {links.map((link) => {
              const isActive = activeBlock === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-link-item ${isActive ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                >
                  {link.label}
                  {isActive && <span className="active-dot" />}
                </a>
              );
            })}

            <a
              href="#contact"
              className="nav-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("contact");
              }}
            >
              <span>Let's Talk</span>
              <Send size={14} />
            </a>
          </nav>

          {/* View Mode Toggle (Dedicated Separate Pages vs Continuous Scroll) */}
          <button
            type="button"
            className="view-mode-toggle-btn clickable"
            onClick={onToggleViewMode}
            title={
              viewMode === "pages"
                ? "Switch to Continuous Scroll View"
                : "Switch to Dedicated Separate Page View"
            }
          >
            {viewMode === "pages" ? (
              <>
                <Layers size={15} />
                <span className="toggle-label-text">Page View</span>
              </>
            ) : (
              <>
                <LayoutGrid size={15} />
                <span className="toggle-label-text">Scroll View</span>
              </>
            )}
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn clickable"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
