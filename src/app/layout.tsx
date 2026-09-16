import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
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
