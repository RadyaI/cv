import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  const { experience } = cv;

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="03_experience" title="Experience" />

      <ol className="relative ml-2 border-l border-line">
        {experience.map((job) => (
          <li key={`${job.role}-${job.period}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg"
            />

            <div className="card p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-muted">{job.company}</p>
                </div>
                <p className="font-mono text-xs text-accent">{job.period}</p>
              </div>

              <p className="mt-2 flex flex-wrap gap-2">
                <span className="tag">{job.type}</span>
                <span className="tag">{job.location}</span>
              </p>

              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="font-mono text-accent">
                      &gt;
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
