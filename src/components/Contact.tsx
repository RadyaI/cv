import cv from "@/data/cv.json";

const { profile, socials } = cv;

export default function Contact() {
  return (
    <section
      aria-labelledby="judul-kontak"
      className="border-t-[3px] border-ink bg-brand"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <span id="contact" />
        <p className="font-mono text-xs font-bold uppercase tracking-widest sm:text-sm">
          06 / contact
        </p>
        <h2
          id="judul-kontak"
          className="mt-3 max-w-3xl text-4xl font-black uppercase leading-[1] sm:text-6xl"
        >
          Let&apos;s work together.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">
          Have an internship opportunity or a project in mind? Send me a message and I&apos;ll get back to you as soon as I can.          usahakan membalas secepatnya.
        </p>

        <address className="mt-8 flex flex-wrap gap-4 not-italic">
          <a href={`mailto:${profile.email}`} className="btn btn-dark">
            {profile.email}
          </a>
          {socials
            .filter((s) => s.url)
            .map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer me"
                className="btn"
              >
                {social.label} ↗
              </a>
            ))}
        </address>
      </div>
    </section>
  );
}
