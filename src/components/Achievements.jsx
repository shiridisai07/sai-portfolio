import { motion } from "framer-motion";
import {
  Trophy,
  GraduationCap,
  Code2,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon (SIH)",
    category: "National Level Hackathon",
    badge: "Hackathon",
    description:
      "Collaborated with an agile engineering team to develop a technology-based solution for an impactful real-world challenge in a fast-paced, high-pressure environment.",
    points: [
      "Contributed to core idea development and system architecture design.",
      "Tackled complex technical problem-solving and algorithmic bottlenecks.",
      "Presented and defended the proposed digital prototype before evaluation panels.",
    ],
  },
  {
    icon: Code2,
    title: "University Level Frontend Hackathon",
    category: "Design & Development Hackathon",
    badge: "EduTrack Project",
    description:
      "Developed an innovative web application for an online assignment submission and automated grading workflow interface (EduTrack).",
    points: [
      "Engineered responsive components with clean HTML, CSS, and modern JavaScript.",
      "Delivered refined user navigation and intuitive assignment tracking workflows.",
      "Demonstrated exemplary UI/UX craft and interactive front-end fidelity.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence & Distinction",
    category: "Scholastic Merit",
    badge: "9.72 CGPA",
    description:
      "Consistent top-tier academic performance across B.Tech Computer Science & Engineering at KL University and preceding higher secondary board examinations.",
    points: [
      "Maintained a 9.72 CGPA at Koneru Lakshmaiah University.",
      "Scored 97.1% in Intermediate (12th Grade) at NRI Junior College.",
      "Scored 88.16% in Secondary School (10th Grade) at Srinivasa Public School.",
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">HONORS & RECOGNITION</span>
          <h2>
            Hackathons & <span className="gradient-text">Achievements</span>
          </h2>
          <p>
            Competitive hackathon participation and academic milestones from my journey.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="achievement-card modern-glass-card"
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className="achievement-top">
                  <div className="achievement-icon">
                    <Icon size={24} />
                  </div>
                  <span className="achievement-badge">{item.badge}</span>
                </div>

                <span className="achievement-category">{item.category}</span>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-description">{item.description}</p>

                <ul className="achievement-bullets">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
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
