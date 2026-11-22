import cv from "@/data/cv.json";

export default function Marquee() {
  const items = cv.skills.flatMap((group) => group.items);

  const half = (
    <ul className="flex shrink-0 items-center">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-4 pr-4 font-mono text-sm text-muted"
        >
          <span>{item}</span>
          <span className="text-accent">→</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden="true"
      className="marquee overflow-hidden border-y border-line bg-surface/60 py-3"
    >
      <div className="marquee-track">
        {half}
        {half}
      </div>
    </div>
  );
}
