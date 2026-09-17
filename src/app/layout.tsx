import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "../../public/fonts/inter/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/inter/inter-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/inter/inter-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/inter/inter-700.woff2", weight: "700", style: "normal" },
  ],
});

const spaceGrotesk = localFont({
  variable: "--font-space-grotesk",
  display: "swap",
  src: [
    { path: "../../public/fonts/space-grotesk/space-grotesk-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/space-grotesk/space-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/space-grotesk/space-grotesk-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/space-grotesk/space-grotesk-700.woff2", weight: "700", style: "normal" },
  ],
});

const jetbrainsMono = localFont({
  variable: "--font-jetbrains",
  display: "swap",
  src: [
    { path: "../../public/fonts/jetbrains-mono/jetbrains-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/jetbrains-mono/jetbrains-mono-500.woff2", weight: "500", style: "normal" },
  ],
});

const siteUrl = "https://humayrashajahan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Humayra Shajahan — AI, Automation & Software Engineering",
  description:
    "Portfolio of Humayra Shajahan, a Computer Science undergraduate building AI-powered tools, automation systems and software for real-world operational problems.",
  openGraph: {
    title: "Humayra Shajahan — AI, Automation & Software Engineering",
    description:
      "Portfolio of Humayra Shajahan, a Computer Science undergraduate building AI-powered tools, automation systems and software for real-world operational problems.",
    url: siteUrl,
    siteName: "Humayra Shajahan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humayra Shajahan — AI, Automation & Software Engineering",
    description:
      "Portfolio of Humayra Shajahan, a Computer Science undergraduate building AI-powered tools, automation systems and software for real-world operational problems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
