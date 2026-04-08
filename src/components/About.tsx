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
  { value: "6+", label: "Years Experience" },
  { value: "3",  label: "Published Songs"  },
  { value: "2",  label: "Apps"             },
];

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-zinc-800/60">
      <p
        className="font-mono-custom text-zinc-500 uppercase tracking-widest mb-8"
        style={{ fontSize: "0.7rem" }}
      >
        About
      </p>

      <p
        className="fade-in text-zinc-300 leading-relaxed mb-10 max-w-xl"
        style={{ fontSize: "1rem", fontFamily: "var(--font-dm-sans)" }}
      >
        Senior Backend Engineer with 6+ years of experience designing and
        building distributed systems, APIs, and microservices — most recently at
        Rakuten in Osaka, Japan. Outside of engineering, I write and produce
        original music and ship mobile apps.
      </p>

      <div className="fade-in fade-delay-1 grid grid-cols-3 gap-6 py-8 border-t border-b border-zinc-800/60 mb-10 max-w-xs">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p
              className="font-heading font-bold text-white mb-0.5"
              style={{ fontSize: "2rem", lineHeight: 1.1 }}
            >
              {value}
            </p>
            <p
              className="text-zinc-500"
              style={{
                fontSize: "0.72rem",
                fontFamily: "var(--font-dm-sans)",
                lineHeight: 1.4,
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
        className="fade-in fade-delay-2 inline-flex items-center gap-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-600 px-5 py-2.5 rounded-lg transition-all duration-200"
        style={{ fontSize: "0.875rem", fontFamily: "var(--font-dm-sans)" }}
      >
        Download CV
        <DownloadIcon size={14} />
      </a>
    </section>
  );
}
