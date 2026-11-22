import cv from "@/data/cv.json";

export default function Footer() {
  const { site, profile } = cv;

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 font-mono text-xs text-muted sm:px-6">
        <p>
          © {site.copyrightYear} {profile.name}
        </p>
        <p>Last updated {site.lastUpdated}</p>
        <a href="#content" className="no-print transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
