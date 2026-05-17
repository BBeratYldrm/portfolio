function DownloadIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "3",  label: "Published Songs"  },
  { value: "2",  label: "Apps"             },
];

export default function About() {
  return (
    <section id="about" className="py-20" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <p
        className="font-mono-custom uppercase tracking-widest mb-8"
        style={{ fontSize: "0.7rem", color: "var(--fg-3)" }}
      >
        About
      </p>

      <p
        className="fade-in leading-relaxed mb-10 max-w-xl"
        style={{ fontSize: "1rem", fontFamily: "var(--font-dm-sans)", color: "var(--fg-2)" }}
      >
        Senior Backend Engineer with 7+ years of experience designing scalable
        distributed systems, APIs, and microservices — most recently at Rakuten
        in Osaka, Japan. In parallel, I create and release my own music
        independently — owning the entire pipeline from songwriting and
        composition to performance and distribution — and develop mobile apps.
      </p>

      <div
        className="fade-in fade-delay-1 grid grid-cols-3 gap-6 py-8 mb-10 max-w-xs"
        style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}
      >
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p
              className="font-heading font-bold mb-0.5"
              style={{ fontSize: "2rem", lineHeight: 1.1, color: "var(--fg)" }}
            >
              {value}
            </p>
            <p
              style={{
                fontSize: "0.72rem",
                fontFamily: "var(--font-dm-sans)",
                lineHeight: 1.4,
                color: "var(--fg-3)",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      <a
        href="/cv.pdf"
        download
        className="fade-in fade-delay-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200"
        style={{
          fontSize: "0.875rem",
          fontFamily: "var(--font-dm-sans)",
          color: "var(--fg-2)",
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
          transition: "color 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.color = "var(--fg)";
          el.style.borderColor = "var(--border-hover)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.color = "var(--fg-2)";
          el.style.borderColor = "var(--border)";
        }}
      >
        Download CV
        <DownloadIcon size={14} />
      </a>
    </section>
  );
}
