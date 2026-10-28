import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Github, Linkedin } from "./Icons.jsx";
import { personalProfile } from "../data/portfolioData.js";

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim()) {
      setFormError("Please enter your name.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setFormError("Please write a message before sending.");
      return;
    }

    setIsSubmitting(true);

    // Honest mailto client handover (no fake simulated backend)
    setTimeout(() => {
      const mailtoSubject = encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      );
      const mailtoBody = encodeURIComponent(
        `Hi Sai,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      );

      window.location.href = `mailto:${personalProfile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p>
            Open to software development internships, graduate opportunities, and technical collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Details & Quick Actions */}
          <motion.div
            className="contact-info-card modern-glass-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-card-header">
              <span className="contact-badge">
                <MessageSquare size={14} />
                Direct Communication
              </span>
              <h3>Reach out directly</h3>
              <p>
                Feel free to contact me directly regarding internship opportunities or technical discussions. All messages are appreciated.
              </p>
            </div>

            <div className="contact-channels">
              {/* Email */}
              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <Mail size={19} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Email Address</span>
                  <a
                    href={`mailto:${personalProfile.email}`}
                    className="channel-value"
                  >
                    {personalProfile.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn clickable"
                  onClick={() => handleCopy(personalProfile.email, "email")}
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedType === "email" ? (
                    <Check size={16} className="text-success" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <Phone size={19} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Phone / Mobile</span>
                  <a
                    href={`tel:${personalProfile.phone}`}
                    className="channel-value"
                  >
                    {personalProfile.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn clickable"
                  onClick={() => handleCopy(personalProfile.phone, "phone")}
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedType === "phone" ? (
                    <Check size={16} className="text-success" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <MapPin size={19} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Location</span>
                  <span className="channel-value">
                    {personalProfile.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={personalProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            className="contact-form-card modern-glass-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Send a Message</h3>
            <p className="form-subtext">
              Directly handsoff to your mail client with verified parameters to <strong>{personalProfile.email}</strong>.
            </p>

            {formError && (
              <div className="contact-error-alert" role="alert">
                <AlertCircle size={16} />
                <span>{formError}</span>
              </div>
            )}

            {submitSuccess && (
              <div className="contact-success-alert" role="status">
                <CheckCircle2 size={16} />
                <span>Opening your email client to send message...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Your Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Software Development Internship / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  required
                  rows="4"
                  placeholder="Hello Sai, I came across your portfolio..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button button-primary submit-btn clickable"
              >
                <Send size={17} />
                <span>{isSubmitting ? "Preparing..." : "Send Message via Email"}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
