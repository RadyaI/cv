import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";
import { accents } from "@/lib/accents";

const { projects } = cv;

export default function Projects() {
  return (
    <section
      aria-labelledby="judul-proyek"
      className="border-y-[3px] border-ink bg-rose/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <span id="projects" />
        <SectionHeading id="judul-proyek" no="04" title="Projects" sub="projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="brutal-card brutal-card-hover flex flex-col p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-black sm:text-2xl">
                  {project.title}
                </h3>
                <span
                  className={`tag shrink-0 ${accents[i % accents.length]}`}
                >
                  {project.year}
                </span>
              </div>
              <p className="mt-3 flex-1 leading-relaxed">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag bg-bg">
                    {tag}
                  </li>
                ))}
              </ul>
              {(project.demo || project.repo) && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary !px-3 !py-1.5 text-sm"
                      aria-label={`View ${project.title} demo`}
                    >
                      Demo ↗
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn !px-3 !py-1.5 text-sm"
                      aria-label={`View ${project.title} source code`}
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
