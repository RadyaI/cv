import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";
import { accents } from "@/lib/accents";

const { skills } = cv;

export default function Skills() {
  return (
    <section
      aria-labelledby="judul-skill"
      className="border-y-[3px] border-ink bg-sky/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <span id="skills" />
        <SectionHeading
          id="judul-skill"
          no="02"
          title="Skills"
          sub="skills"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group, i) => (
            <article key={group.group} className="brutal-card p-5 sm:p-6">
              <h3
                className={`mb-4 inline-block border-[3px] border-ink px-3 py-1 text-lg font-black uppercase ${accents[i % accents.length]}`}
              >
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="tag bg-bg">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
