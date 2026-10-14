import cv from "@/data/cv.json";

const allSkills = cv.skills.flatMap((group) => group.items);

export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-bg"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {allSkills.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="px-5 font-mono text-sm font-bold uppercase tracking-wider sm:text-base"
              >
                {item} <span className="text-brand">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
