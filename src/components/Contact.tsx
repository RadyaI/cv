import cv from "@/data/cv.json";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const { profile, socials } = cv;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="06_contact" title="Contact" />

      <div className="card relative overflow-hidden p-8 sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative">
          <p className="font-mono text-sm text-accent">{profile.status}</p>
          <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            Let&apos;s build something with data.
          </h3>
          <p className="mt-4 max-w-xl text-lg text-muted">
            I&apos;m open to Data Engineering internships. Send me an email or grab my CV
            below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              {profile.email}
            </a>
            <a href={profile.cvUrl} download className="btn">
              Download CV ↓
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
