const projects = [
  {
    name: "Gravity Hunter",
    description:
      "A hold-and-release survival arcade mobile game built with React Native, Expo, and Skia for canvas rendering.",
    tags: ["React Native", "Skia", "Expo", "Game Dev"],
    status: "Live",
    link: "https://apps.apple.com/tr/app/gravity-hunter/id6760577848",
  },
  {
    name: "Tomorrows",
    description:
      "A minimal to-do app for people who prefer one thing at a time. One day, one list. Available on the App Store.",
    tags: ["React Native", "Expo", "iOS", "Productivity"],
    status: "Live",
    link: "https://apps.apple.com/us/app/tomorrows/id6759521782",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <p
        className="font-mono-custom uppercase tracking-widest mb-10"
        style={{ fontSize: "0.7rem", color: "var(--fg-3)" }}
      >
        Projects
      </p>

      <div className="grid gap-4">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className={`fade-in fade-delay-${i + 1} rounded-xl p-6`}
            style={{
              background: "var(--bg-surface-subtle)",
              border: "1px solid var(--border)",
              transition: "border-color 0.3s, background 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border-hover)";
              el.style.background = "var(--bg-surface)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.background = "var(--bg-surface-subtle)";
            }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3
                className="font-heading font-semibold text-xl"
                style={{ color: "var(--fg)" }}
              >
                {project.name}
              </h3>
              <span
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full whitespace-nowrap font-mono-custom"
                style={{
                  fontSize: "0.65rem",
                  color: "#34d399",
                  background: "rgba(52, 211, 153, 0.1)",
                  border: "1px solid rgba(52, 211, 153, 0.2)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#34d399" }}
                />
                {project.status}
              </span>
            </div>

            <p
              className="leading-relaxed mb-5"
              style={{
                fontSize: "0.9rem",
                fontFamily: "var(--font-dm-sans)",
                color: "var(--fg-2)",
              }}
            >
              {project.description}
            </p>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-custom px-2.5 py-1 rounded-full"
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--fg-3)",
                      background: "var(--bg-tag)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-custom whitespace-nowrap transition-colors duration-200"
                  style={{ fontSize: "0.68rem", color: "var(--fg-3)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-3)")}
                >
                  App Store ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
