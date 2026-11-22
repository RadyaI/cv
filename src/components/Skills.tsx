import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";
import { accentText, accentBorder } from "@/lib/accents";

export default function Skills() {
  const { skills } = cv;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="02_skills"
        title="Skills"
        hint="Tools and fundamentals I use, from data and programming to web and analytics."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <div
            key={group.group}
            className={`card card-hover border-l-2 p-5 ${accentBorder[i % accentBorder.length]}`}
          >
            <h3
              className={`font-mono text-sm font-bold ${accentText[i % accentText.length]}`}
            >
              {group.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="tag text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
