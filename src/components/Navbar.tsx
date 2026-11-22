"use client";

import { useState } from "react";
import cv from "@/data/cv.json";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { profile } = cv;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a
          href="#content"
          onClick={() => setOpen(false)}
          className="font-mono text-sm font-semibold"
        >
          <span className="text-accent">{profile.nickname.toLowerCase()}</span>
          <span className="text-muted">@cv:~$</span>
          <span
            aria-hidden
            className="ml-1 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-accent motion-reduce:animate-none"
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.cvUrl}
          download
          className="btn btn-primary hidden px-3 py-1.5 text-sm md:inline-flex"
        >
          Download CV
        </a>

        <button
          type="button"
          className="btn px-3 py-1.5 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-surface md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {links.map((l) => (
              <li key={l.href} className="border-b border-line last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a href={profile.cvUrl} download className="btn btn-primary w-full">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
