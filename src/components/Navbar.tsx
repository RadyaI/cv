import cv from "@/data/cv.json";

const { profile } = cv;

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-bg">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a
          href="#beranda"
          className="shrink-0 border-[3px] border-ink bg-ink px-3 py-1 font-mono text-lg font-bold text-bg"
          aria-label={`${profile.name}, ke beranda`}
        >
          RI.
        </a>
        <ul className="no-scrollbar flex items-center gap-1 overflow-x-auto sm:gap-2">
          {navItems.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className="block border-2 border-transparent px-2.5 py-1 text-sm font-bold hover:border-ink hover:bg-brand sm:px-3"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
