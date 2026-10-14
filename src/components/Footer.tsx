import cv from "@/data/cv.json";

const { site, profile } = cv;

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink px-4 py-6 text-center font-mono text-xs text-bg sm:text-sm">
      <p>
        © {site.copyrightYear} {profile.name}. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
