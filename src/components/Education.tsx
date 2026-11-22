import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  const { education, certifications } = cv;

  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="05_education" title="Education" />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.school} className="card card-hover p-5">
            <p className="font-mono text-xs text-accent">{e.period}</p>
            <h3 className="mt-2 text-xl font-semibold">{e.school}</h3>
            <p className="text-cyan">{e.major}</p>
            <p className="mt-3 text-muted">{e.detail}</p>
          </div>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="mt-14">
          <h3 className="mb-5 font-mono text-sm text-muted">
            <span className="text-accent">{"// "}</span>certifications
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <li key={c.name}>
                <a
                  href={c.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover block h-full p-4"
                >
                  <p className="font-semibold">{c.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {c.issuer} · {c.year}
                  </p>
                  <p className="mt-3 font-mono text-xs text-accent">View certificate ↗</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
