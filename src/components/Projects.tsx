import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const { projects } = cv;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="04_projects"
        title="Projects"
        hint="Things I've built, from computer vision to web apps."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card card-hover flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <span className="font-mono text-xs text-muted">{p.year}</span>
            </div>

            <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>

            {(p.demo || p.repo) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-3 py-1.5 text-sm"
                    aria-label={`Live demo of ${p.title}`}
                  >
                    Live demo ↗
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn px-3 py-1.5 text-sm"
                    aria-label={`Source code of ${p.title}`}
                  >
                    Source code ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
