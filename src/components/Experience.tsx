import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";
import { accents } from "@/lib/accents";

const { experience } = cv;

export default function Experience() {
  return (
    <section
      aria-labelledby="judul-pengalaman"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <span id="experience" />
      <SectionHeading
        id="judul-pengalaman"
        no="03"
        title="Experience"
        sub="experience"
      />

      <ol className="space-y-8 border-l-[3px] border-ink pl-5 sm:pl-8">
        {experience.map((job, i) => (
          <li key={`${job.role}-${job.company}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.9rem] top-6 h-4 w-4 border-[3px] border-ink bg-brand sm:-left-[2.6rem] sm:h-5 sm:w-5"
            />
            <article className="brutal-card brutal-card-hover p-5 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black sm:text-2xl">{job.role}</h3>
                  <p className="mt-1 font-bold">{job.company}</p>
                </div>
                <p className={`tag ${accents[i % accents.length]}`}>
                  {job.period}
                </p>
              </div>
              <p className="mt-2 font-mono text-xs uppercase opacity-70">
                {job.type} · {job.location}
              </p>
              <ul className="mt-5 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-ink"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
