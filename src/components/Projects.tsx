const projects = [
  {
    name: "Gravity Hunter",
    description:
      "A hold-and-release survival arcade mobile game built with React Native, Expo, and Skia for canvas rendering.",
    tags: ["React Native", "Skia", "Expo", "Game Dev"],
    status: "In Development",
    link: null,
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
    <section id="projects" className="py-20 border-t border-zinc-800/60">
      <p
        className="font-mono-custom text-zinc-500 uppercase tracking-widest mb-10"
        style={{ fontSize: "0.7rem" }}
      >
        Projects
      </p>

      <div className="grid gap-4">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className={`fade-in fade-delay-${i + 1} bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-heading font-semibold text-white text-xl">
                {project.name}
              </h3>
              {project.status === "Live" ? (
                <span
                  className="flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full whitespace-nowrap font-mono-custom"
                  style={{ fontSize: "0.65rem" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {project.status}
                </span>
              ) : (
                <span
                  className="flex items-center gap-1.5 text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full whitespace-nowrap font-mono-custom"
                  style={{ fontSize: "0.65rem" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {project.status}
                </span>
              )}
            </div>

            <p
              className="text-zinc-400 leading-relaxed mb-5"
              style={{ fontSize: "0.9rem", fontFamily: "var(--font-dm-sans)" }}
            >
              {project.description}
            </p>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-custom text-zinc-500 bg-zinc-800/80 border border-zinc-700/40 px-2.5 py-1 rounded-full"
                    style={{ fontSize: "0.68rem" }}
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
                  className="font-mono-custom text-zinc-500 hover:text-white transition-colors duration-200 whitespace-nowrap"
                  style={{ fontSize: "0.68rem" }}
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
