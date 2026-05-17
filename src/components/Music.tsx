import { SpotifyIcon, AppleMusicIcon } from "./SocialIcons";

const songs = [
  "Unuttum Biraz Ben",
  "Bir İhtilalden Kalma",
  "Müttefiksiz",
];

const platforms = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/1IaEzSxsP7D2WrpMwPD57W",
    Icon: SpotifyIcon,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/berat-yildirim/1536288860",
    Icon: AppleMusicIcon,
  },
];

export default function Music() {
  return (
    <section id="music" className="py-20" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <p
        className="font-mono-custom uppercase tracking-widest mb-2"
        style={{ fontSize: "0.7rem", color: "var(--fg-3)" }}
      >
        Music
      </p>

      <h2
        className="font-heading font-semibold mb-1.5"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "var(--fg)" }}
      >
        Original Tracks
      </h2>
      <p
        className="mb-10"
        style={{ fontSize: "0.9rem", fontFamily: "var(--font-dm-sans)", color: "var(--fg-3)" }}
      >
        On major streaming platforms
      </p>

      <div className="mb-8 -mx-2">
        {songs.map((song, i) => (
          <div
            key={song}
            className={`fade-in fade-delay-${i + 1} group flex items-center gap-4 px-3 py-3.5 rounded-lg cursor-default`}
            style={{ transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div className="w-6 flex items-center justify-center flex-shrink-0">
              <span
                className="font-mono-custom group-hover:hidden"
                style={{ fontSize: "0.65rem", color: "var(--fg-3)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="hidden group-hover:flex items-end gap-0.5 h-4">
                <div className="bar" style={{ background: "var(--fg)" }} />
                <div className="bar" style={{ background: "var(--fg)" }} />
                <div className="bar" style={{ background: "var(--fg)" }} />
                <div className="bar" style={{ background: "var(--fg)" }} />
              </div>
            </div>

            <span
              className="transition-colors duration-200"
              style={{ fontSize: "0.9rem", fontFamily: "var(--font-dm-sans)", color: "var(--fg-2)" }}
            >
              {song}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {platforms.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200"
            style={{
              fontSize: "0.85rem",
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
            <Icon size={15} />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
