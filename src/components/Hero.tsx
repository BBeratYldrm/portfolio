import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  SpotifyIcon,
  AppleMusicIcon,
} from "./SocialIcons";

const links = [
  { label: "GitHub",      href: "https://github.com/BBeratYldrm",                             Icon: GithubIcon      },
  { label: "LinkedIn",    href: "https://www.linkedin.com/in/bberatyldrm",                     Icon: LinkedinIcon    },
  { label: "Instagram",   href: "https://www.instagram.com/b.beratyldrm/",                     Icon: InstagramIcon   },
  { label: "YouTube",     href: "https://www.youtube.com/c/BBeratYILDIRIM",                    Icon: YoutubeIcon     },
  { label: "Spotify",     href: "https://open.spotify.com/artist/1IaEzSxsP7D2WrpMwPD57W",     Icon: SpotifyIcon     },
  { label: "Apple Music", href: "https://music.apple.com/us/artist/berat-yildirim/1536288860", Icon: AppleMusicIcon  },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10 sm:gap-12">
        <div className="order-2 sm:order-1 flex-1 min-w-0">
          <h1
            className="hero-1 font-heading font-bold tracking-tight mb-4"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.05,
              background: "var(--name-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Berat Yıldırım
          </h1>

          <p
            className="hero-2 font-medium mb-5"
            style={{
              fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
              fontFamily: "var(--font-dm-sans)",
              color: "var(--fg-2)",
            }}
          >
            Senior Backend Engineer &amp; Musician
          </p>

          <p
            className="hero-3 leading-relaxed mb-10 max-w-sm"
            style={{
              fontSize: "0.95rem",
              fontFamily: "var(--font-dm-sans)",
              color: "var(--fg-3)",
            }}
          >
            Building scalable systems by day, producing music by night.
            <br />
            Based in Osaka, Japan.
          </p>

          <div className="hero-4 flex flex-wrap gap-2.5">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  color: "var(--fg-2)",
                  transition: "color 0.2s, border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--fg)";
                  el.style.borderColor = "var(--border-hover)";
                  el.style.background = "var(--bg-hover)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--fg-2)";
                  el.style.borderColor = "var(--border)";
                  el.style.background = "var(--bg-surface)";
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 sm:order-2 flex justify-center sm:justify-end flex-shrink-0 hero-1">
          <div
            style={{
              padding: "2px",
              borderRadius: "9999px",
              background:
                "linear-gradient(135deg, var(--border-hover) 0%, var(--border-subtle) 100%)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-full flex items-center justify-center"
              style={{
                width: "clamp(120px, 22vw, 168px)",
                height: "clamp(120px, 22vw, 168px)",
                background: "var(--bg-surface)",
              }}
            >
              <span
                className="font-heading font-bold select-none"
                style={{
                  fontSize: "clamp(1.25rem, 5vw, 1.75rem)",
                  color: "var(--fg-3)",
                }}
                aria-hidden="true"
              >
                BY
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Berat Yıldırım"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
