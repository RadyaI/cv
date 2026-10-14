import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";
import { accents } from "@/lib/accents";

const { education } = cv;

// Diberi tipe eksplisit supaya array kosong ([]) di JSON tetap aman dipakai.
const certifications: { name: string; issuer: string; year: string }[] =
  cv.certifications;

export default function Education() {
  const hasCerts = certifications.length > 0;

  const educationCards = education.map((item, i) => (
    <article key={item.school} className="brutal-card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-black sm:text-xl">{item.school}</h3>
        <span className={`tag ${accents[i % accents.length]}`}>
          {item.period}
        </span>
      </div>
      <p className="mt-1 font-bold">{item.major}</p>
      <p className="mt-2 leading-relaxed">{item.detail}</p>
    </article>
  ));

  return (
    <section
      aria-labelledby="judul-pendidikan"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <span id="education" />
      <SectionHeading
        id="judul-pendidikan"
        no="05"
        title="Education"
        sub="education"
      />

      {hasCerts ? (
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">{educationCards}</div>

          <div>
            <h3 className="mb-4 inline-block border-[3px] border-ink bg-mint px-3 py-1 text-lg font-black uppercase">
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="brutal-card flex items-start justify-between gap-4 p-4"
                >
                  <div>
                    <p className="font-bold">{cert.name}</p>
                    <p className="font-mono text-xs uppercase opacity-70">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="tag bg-bg">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">{educationCards}</div>
      )}
    </section>
  );
}