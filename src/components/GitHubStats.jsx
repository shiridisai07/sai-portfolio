
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  GitFork,
  Star,
  BookOpen,
  Users,
  ExternalLink,
  Code2,
} from "lucide-react";

// Replace this with your actual GitHub username.
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";

export default function GitHubStats() {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGitHubData() {
      try {
        setLoading(true);
        setError("");

        if (
          !GITHUB_USERNAME ||
          GITHUB_USERNAME === "YOUR_GITHUB_USERNAME"
        ) {
          setError("Add your GitHub username to display your statistics.");
          return;
        }

        const profileResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { signal: controller.signal }
        );

        if (!profileResponse.ok) {
          throw new Error(
            profileResponse.status === 404
              ? "GitHub profile not found. Check your username."
              : "Unable to load GitHub profile. Please try again later."
          );
        }

        const profileData = await profileResponse.json();

        const repositoryResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
          { signal: controller.signal }
        );

        if (!repositoryResponse.ok) {
          throw new Error("Unable to load your public repositories.");
        }

        const repositoryData = await repositoryResponse.json();

        setProfile(profileData);
        setRepositories(repositoryData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchGitHubData();

    return () => controller.abort();
  }, []);

  const totalStars = repositories.reduce(
    (total, repository) => total + repository.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (total, repository) => total + repository.forks_count,
    0
  );

  const languages = {};

  repositories.forEach((repository) => {
    if (repository.language) {
      languages[repository.language] =
        (languages[repository.language] || 0) + 1;
    }
  });

  const topLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const statistics = profile
    ? [
        {
          label: "Public Repositories",
          value: profile.public_repos,
          icon: BookOpen,
        },
        {
          label: "Followers",
          value: profile.followers,
          icon: Users,
        },
        {
          label: "Total Stars",
          value: totalStars,
          icon: Star,
        },
        {
          label: "Repository Forks",
          value: totalForks,
          icon: GitFork,
        },
      ]
    : [];

  return (
    <section id="github-stats" className="section github-stats-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">OPEN SOURCE</span>

          <h2>
            GitHub <span className="gradient-text">Statistics</span>
          </h2>

          <p>
            Explore my public repositories, coding activity, and projects.
          </p>
        </motion.div>

        {loading && (
          <div className="github-message" role="status">
            Loading GitHub statistics...
          </div>
        )}

        {!loading && error && (
          <div className="github-message github-error" role="status">
            <Github size={24} />
            <p>{error}</p>

            {GITHUB_USERNAME !== "YOUR_GITHUB_USERNAME" && (
              <a
                className="github-profile-button"
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open GitHub Profile <ExternalLink size={16} />
              </a>
            )}
          </div>
        )}

        {!loading && !error && profile && (
          <>
            <motion.div
              className="github-profile-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="github-profile-info">
                <img
                  className="github-avatar"
                  src={profile.avatar_url}
                  alt={`${profile.login}'s GitHub avatar`}
                  loading="lazy"
                />

                <div>
                  <h3>{profile.name || profile.login}</h3>
                  <p className="github-username">@{profile.login}</p>

                  {profile.bio && (
                    <p className="github-bio">{profile.bio}</p>
                  )}

                  {profile.location && (
                    <p className="github-location">
                      {profile.location}
                    </p>
                  )}
                </div>
              </div>

              <a
                className="github-profile-button"
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile <ExternalLink size={16} />
              </a>
            </motion.div>

            <div className="github-stats-grid">
              {statistics.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.article
                    className="github-stat-card"
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                  >
                    <span className="github-stat-icon">
                      <Icon size={23} />
                    </span>

                    <h3>{stat.value.toLocaleString()}</h3>
                    <p>{stat.label}</p>
                  </motion.article>
                );
              })}
            </div>

            <div className="github-languages">
              <div className="github-subheading">
                <Code2 size={21} />
                <h3>Top Languages by Repository Count</h3>
              </div>

              {topLanguages.length > 0 ? (
                <div className="github-language-list">
                  {topLanguages.map(([language, count]) => (
                    <span className="github-language-tag" key={language}>
                      {language}
                      <strong>{count}</strong>
                    </span>
                  ))}
                </div>
              ) : (
                <p className="github-empty">
                  No programming languages reported by public repositories yet.
                </p>
              )}
            </div>

            <div className="github-repositories">
              <div className="github-subheading">
                <BookOpen size={21} />
                <h3>Recently Updated Repositories</h3>
              </div>

              {repositories.length > 0 ? (
                <div className="github-repository-grid">
                  {repositories.slice(0, 6).map((repository, index) => (
                    <motion.article
                      className="github-repository-card"
                      key={repository.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.06,
                      }}
                    >
                      <div className="github-repository-heading">
                        <BookOpen size={19} />

                        <a
                          href={repository.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {repository.name}
                        </a>

                        <ExternalLink size={15} />
                      </div>

                      <p className="github-repository-description">
                        {repository.description ||
                          "No description provided for this repository."}
                      </p>

                      <div className="github-repository-meta">
                        {repository.language && (
                          <span>{repository.language}</span>
                        )}

                        <span>
                          <Star size={14} />
                          {repository.stargazers_count}
                        </span>

                        <span>
                          <GitFork size={14} />
                          {repository.forks_count}
                        </span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <p className="github-empty">
                  No public repositories are available yet.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
