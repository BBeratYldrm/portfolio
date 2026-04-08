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
              background: "linear-gradient(135deg, #ffffff 0%, #71717a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Berat Yildirim
          </h1>

          <p
            className="hero-2 text-zinc-400 font-medium mb-5"
            style={{
              fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Senior Backend Engineer &amp; Music Producer
          </p>

          <p
            className="hero-3 text-zinc-500 leading-relaxed mb-10 max-w-sm"
            style={{
              fontSize: "0.95rem",
              fontFamily: "var(--font-dm-sans)",
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
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200"
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
                "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 8px 40px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-full bg-zinc-900 flex items-center justify-center"
              style={{ width: "clamp(120px, 22vw, 168px)", height: "clamp(120px, 22vw, 168px)" }}
            >
              <span
                className="font-heading font-bold text-zinc-700 select-none"
                style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)" }}
                aria-hidden="true"
              >
                BY
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Berat Yildirim"
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
