import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";

const { profile } = cv;

export default function About() {
  const [lead, ...rest] = profile.about;

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

      {}
      <h3 className="mb-8 max-w-2xl border-l-[6px] border-ink pl-4 text-xl font-bold leading-snug sm:text-2xl">
        {profile.aboutHeadline}
      </h3>

      {}
      <div className="relative mb-3 mr-3">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 border-[3px] border-ink bg-rose"
        />
        <div className="relative border-[3px] border-ink bg-paper p-6 sm:p-8 lg:columns-2 lg:gap-x-12">
          <p className="mb-5 text-lg font-semibold leading-snug sm:text-xl">
            {lead}
          </p>
          {rest.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-5 text-base leading-relaxed last:mb-0 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}