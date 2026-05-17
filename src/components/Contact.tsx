import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  SpotifyIcon,
  AppleMusicIcon,
  MailIcon,
} from "./SocialIcons";

const socials = [
  { label: "GitHub",      href: "https://github.com/BBeratYldrm",                             Icon: GithubIcon      },
  { label: "LinkedIn",    href: "https://www.linkedin.com/in/bberatyldrm",                     Icon: LinkedinIcon    },
  { label: "Instagram",   href: "https://www.instagram.com/b.beratyldrm/",                     Icon: InstagramIcon   },
  { label: "YouTube",     href: "https://www.youtube.com/c/BBeratYILDIRIM",                    Icon: YoutubeIcon     },
  { label: "Spotify",     href: "https://open.spotify.com/artist/1IaEzSxsP7D2WrpMwPD57W",     Icon: SpotifyIcon     },
  { label: "Apple Music", href: "https://music.apple.com/us/artist/berat-yildirim/1536288860", Icon: AppleMusicIcon  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <p
        className="font-mono-custom uppercase tracking-widest mb-8"
        style={{ fontSize: "0.7rem", color: "var(--fg-3)" }}
      >
        Contact
      </p>

      <div className="fade-in mb-10">
        <a
          href="mailto:bberatyldrm@gmail.com"
          className="group inline-flex items-center gap-3 transition-colors duration-200"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontFamily: "var(--font-dm-sans)",
            color: "var(--fg-2)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-2)")}
        >
          <MailIcon size={20} />
          bberatyldrm@gmail.com
        </a>
      </div>

      <div className="fade-in fade-delay-1 flex flex-wrap gap-2.5">
        {socials.map(({ label, href, Icon }) => (
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

      <p
        className="font-mono-custom mt-20"
        style={{ fontSize: "0.65rem", color: "var(--fg-3)" }}
      >
        © 2026 Berat Yıldırım
      </p>
    </section>
  );
}
