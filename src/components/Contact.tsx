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
    <section id="contact" className="py-20 border-t border-zinc-800/60">
      <p
        className="font-mono-custom text-zinc-500 uppercase tracking-widest mb-8"
        style={{ fontSize: "0.7rem" }}
      >
        Contact
      </p>

      <div className="fade-in mb-10">
        <a
          href="mailto:bberatyldrm@gmail.com"
          className="group inline-flex items-center gap-3 text-zinc-300 hover:text-white transition-colors duration-200"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontFamily: "var(--font-dm-sans)",
          }}
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
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200"
          >
            <Icon size={17} />
          </a>
        ))}
      </div>

      <p
        className="font-mono-custom text-zinc-700 mt-20"
        style={{ fontSize: "0.65rem" }}
      >
        © 2026 Berat Yıldırım
      </p>
    </section>
  );
}
