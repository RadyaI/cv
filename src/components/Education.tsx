import Image from "next/image";
import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";
import { accents } from "@/lib/accents";

const { education } = cv;

type Certification = {
  name: string;
  issuer: string;
  year: string;
  file?: string; // file asli (PDF / gambar), dibuka lewat tombol
  image?: string; // thumbnail; kalau kosong dan file-nya gambar, file dipakai
};

// Diberi tipe eksplisit supaya array kosong ([]) di JSON tetap aman dipakai.
const certifications: Certification[] = cv.certifications;

const isImage = (path?: string) =>
  !!path && /\.(jpe?g|png|webp|avif)$/i.test(path);

export default function Education() {
  const hasCerts = certifications.length > 0;

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

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
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
        ))}
      </div>

      {hasCerts && (
        <div className="mt-14">
          <h3 className="mb-6 inline-block border-[3px] border-ink bg-mint px-3 py-1 text-lg font-black uppercase">
            Certifications
          </h3>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => {
              const preview =
                cert.image ?? (isImage(cert.file) ? cert.file : undefined);

              return (
                <li
                  key={cert.name}
                  className="brutal-card brutal-card-hover flex flex-col"
                >
                  {preview ? (
                    <div className="relative aspect-[4/3] border-b-[3px] border-ink bg-sky/30">
                      <Image
                        src={preview}
                        alt={`${cert.name} certificate`}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex aspect-[4/3] items-center justify-center border-b-[3px] border-ink bg-sky/30 font-mono text-sm font-bold uppercase"
                    >
                      {cert.file ? "PDF" : "Certificate"}
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold">{cert.name}</p>
                        <p className="font-mono text-xs uppercase opacity-70">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="tag shrink-0 bg-bg">{cert.year}</span>
                    </div>

                    {cert.file && (
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn mt-4 self-start !px-3 !py-1.5 text-sm"
                        aria-label={`View ${cert.name} certificate`}
                      >
                        View certificate ↗
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}