import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  const { profile, education } = cv;

  const facts = [
    { label: "location", value: profile.location },
    { label: "university", value: education[0].school },
    { label: "focus", value: profile.focus },
    { label: "status", value: profile.status },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="01_about" title="About" />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
            {profile.aboutHeadline}
          </h3>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="card h-fit overflow-hidden">
          <div className="border-b border-line bg-raised px-4 py-2.5 font-mono text-xs text-muted">
            <span className="text-cyan">SELECT</span> * <span className="text-cyan">FROM</span>{" "}
            {profile.nickname.toLowerCase()};
          </div>
          <dl className="divide-y divide-line font-mono text-sm">
            {facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[6rem_1fr] gap-3 px-4 py-3">
                <dt className="text-muted">{f.label}</dt>
                <dd className="text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-line px-4 py-2 font-mono text-xs text-accent">
            {facts.length} rows returned
          </div>
        </div>
      </div>
    </section>
  );
}
