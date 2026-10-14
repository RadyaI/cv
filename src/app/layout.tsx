import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import cv from "@/data/cv.json";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const { site, profile } = cv;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.shortTitle}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.shortTitle,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffd93d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border-[3px] focus:border-ink focus:bg-brand focus:px-4 focus:py-2 focus:font-bold"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
