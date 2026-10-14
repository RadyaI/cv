import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";
import { accents } from "@/lib/accents";

const { profile, stats } = cv;

export default function About() {
  return (
    <section
      aria-labelledby="judul-tentang"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <span id="about" />
      <SectionHeading
        id="judul-tentang"
        no="01"
        title="About Me"
        sub="about"
      />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="brutal-card space-y-4 p-6 text-base leading-relaxed sm:p-8 sm:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <li
              key={stat.label}
              className={`brutal-card flex flex-col justify-between p-4 ${accents[i % accents.length]}`}
            >
              <span className="text-3xl font-black sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 font-mono text-xs font-bold uppercase">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
