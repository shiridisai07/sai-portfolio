import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { certifications } from "../data/portfolioData.js";
import SlidingWindow from "./SlidingWindow.jsx";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openInspector = (cert) => {
    setActiveCert(cert);
    setIsWindowOpen(true);
  };

  const closeInspector = () => {
    setIsWindowOpen(false);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % certifications.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="certifications-container">
        {/* Carousel Header Controls */}
        <div className="certifications-toolbar">
          <p className="cert-subtext">
            Official credentials verified across cloud platforms, artificial intelligence, and developer tooling.
          </p>

          <div className="carousel-nav-controls">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous certification"
              title="Previous certification"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="carousel-pagination-text">
              {startIndex + 1} / {certifications.length}
            </span>
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={handleNext}
              aria-label="Next certification"
              title="Next certification"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => {
            const title = certificate.title || certificate.name;
            const credentialUrl =
              certificate.credentialUrl || certificate.link || "";

            return (
              <motion.article
                className="certificate-card modern-glass-card"
                key={`${title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              >
                <div className="certificate-top">
                  <div className="certificate-icon">
                    <Award size={24} />
                  </div>

                  <div className="certificate-status">
                    <ShieldCheck size={14} className="verified-badge-icon" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="certificate-content">
                  <span className="certificate-issuer">{certificate.issuer}</span>
                  <h3 className="certificate-title">{title}</h3>

                  {certificate.description && (
                    <p className="certificate-snippet">
                      {certificate.description}
                    </p>
                  )}

                  {certificate.skillsValidated && (
                    <div className="tag-list cert-tags">
                      {certificate.skillsValidated.slice(0, 2).map((skill) => (
                        <span className="tag tag-sm" key={skill}>
                          {skill}
                        </span>
                      ))}
                      {certificate.skillsValidated.length > 2 && (
                        <span className="tag tag-sm tag-more">
                          +{certificate.skillsValidated.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="certificate-footer">
                  <button
                    type="button"
                    className="certificate-inspect-btn clickable"
                    onClick={() => openInspector(certificate)}
                    title="Inspect certification details"
                  >
                    <Maximize2 size={14} />
                    <span>Details</span>
                  </button>

                  {credentialUrl && (
                    <a
                      className="certificate-link-btn"
                      href={credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${title} on LinkedIn`}
                    >
                      <span>Verify Link</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <SlidingWindow
        isOpen={isWindowOpen}
        onClose={closeInspector}
        data={activeCert}
        type="certification"
      />
    </>
  );
}
