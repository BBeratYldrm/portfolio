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
    <section id="music" className="py-20 border-t border-zinc-800/60">
      <p
        className="font-mono-custom text-zinc-500 uppercase tracking-widest mb-2"
        style={{ fontSize: "0.7rem" }}
      >
        Music
      </p>

      <h2
        className="font-heading font-semibold text-white mb-1.5"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
      >
        Original Tracks
      </h2>
      <p
        className="text-zinc-500 mb-10"
        style={{ fontSize: "0.9rem", fontFamily: "var(--font-dm-sans)" }}
      >
        On major streaming platforms
      </p>

      <div className="mb-8 -mx-2">
        {songs.map((song, i) => (
          <div
            key={song}
            className={`fade-in fade-delay-${i + 1} group flex items-center gap-4 px-3 py-3.5 rounded-lg hover:bg-zinc-900 transition-colors duration-200 cursor-default`}
          >
            <div className="w-6 flex items-center justify-center flex-shrink-0">
              <span
                className="font-mono-custom text-zinc-600 group-hover:hidden"
                style={{ fontSize: "0.65rem" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="hidden group-hover:flex items-end gap-0.5 h-4">
                <div className="bar bg-white" />
                <div className="bar bg-white" />
                <div className="bar bg-white" />
                <div className="bar bg-white" />
              </div>
            </div>

            <span
              className="text-zinc-400 group-hover:text-white transition-colors duration-200"
              style={{ fontSize: "0.9rem", fontFamily: "var(--font-dm-sans)" }}
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
            className="flex items-center gap-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-600 px-4 py-2 rounded-lg transition-all duration-200"
            style={{ fontSize: "0.85rem", fontFamily: "var(--font-dm-sans)" }}
          >
            <Icon size={15} />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
