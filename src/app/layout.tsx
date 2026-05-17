import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beratyildirim.com"),
  title: "Berat Yildirim",
  description:
    "Senior Backend Engineer & Musician based in Osaka, Japan.",
  openGraph: {
    title: "Berat Yildirim",
    description:
      "Senior Backend Engineer & Musician based in Osaka, Japan.",
    url: "https://beratyildirim.com",
    siteName: "Berat Yildirim",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berat Yildirim",
    description:
      "Senior Backend Engineer & Musician based in Osaka, Japan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${outfit.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark')})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
