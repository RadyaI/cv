import type { ReactNode } from "react";
import cv from "@/data/cv.json";
import JsonLd from "@/components/JsonLd";
import TechText from "@/components/TechText";
import Lanyard from "@/components/Lanyard";
import GhostCursor from "@/components/reactbits/GhostCursor";
import SplashCursor from "@/components/reactbits/SplashCursor";

const {
  site,
  profile,
  socials,
  stats,
  skills,
  experience,
  projects,
  education,
  certifications,
} = cv;

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const nameParts = profile.name.split(" ");
const firstName = nameParts[0];
const lastName = nameParts[nameParts.length - 1];
const initials = `${profile.nickname[0]}${lastName[0]}`;

const pad = (n: number) => String(n + 1).padStart(2, "0");

/* ------------------------------------------------------------------ */
/* Section: kolom kiri sempit (judul) + kolom kanan lebar (isi)        */
/* ------------------------------------------------------------------ */

type SectionProps = {
  id: string;
  index: string;
  title: string;
  dark?: boolean;
  children: ReactNode;
};

function Section({ id, index, title, dark = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`border-b-[3px] border-ink ${dark ? "on-dark bg-ink text-paper" : ""}`}
    >
      <div className="mx-auto grid max-w-[90rem] gap-8 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
        <header className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <p className="outline-text text-7xl font-black leading-none lg:text-[8rem]">
              {index}
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
              {title}
            </h2>
          </div>
        </header>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Signature: RAW -> CLEAN. Cerita data engineering-mu jadi komponen.  */
/* Arahkan kursor ke kartu: sisi kiri ikut lurus.                      */
/* ------------------------------------------------------------------ */

const rawStyle = [
  "-rotate-3 -translate-x-1",
  "rotate-2 translate-x-4",
  "-rotate-1 translate-x-8",
  "rotate-3 -translate-x-2",
  "-rotate-2 translate-x-5",
  "rotate-1 translate-x-1",
];

function RawClean() {
  const items = skills.flatMap((g) => g.items).slice(0, rawStyle.length);

  return (
    <div className="hard group grid sm:grid-cols-[1fr_auto_1fr]">
      <div className="p-5">
        <p className="font-mono text-xs font-bold uppercase text-mute">Raw</p>
        <ul className="mt-4 flex flex-wrap content-start gap-3 overflow-hidden pb-4 pl-2 pr-8">
          {items.map((item, i) => (
            <li
              key={item}
              className={`border-2 border-ink px-2 py-1 font-mono text-sm font-bold transition-transform duration-500 group-hover:translate-x-0 group-hover:rotate-0 motion-reduce:transition-none ${rawStyle[i]}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-hidden
        className="grid place-items-center border-y-[3px] border-ink bg-ink px-4 py-2 text-3xl font-black text-paper sm:border-x-[3px] sm:border-y-0"
      >
        <span className="sm:hidden">↓</span>
        <span className="hidden sm:inline">→</span>
      </div>

      <div className="p-5">
        <p className="font-mono text-xs font-bold uppercase text-mute">Clean</p>
        <ol className="mt-4">
          {items.map((item, i) => (
            <li
              key={item}
              className="grid grid-cols-[2.5rem_1fr] border-b-2 border-ink/25 py-2 font-mono text-sm last:border-b-0"
            >
              <span className="text-mute">{pad(i)}</span>
              <span className="font-bold">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="border-t-[3px] border-ink bg-ink px-5 py-2 font-mono text-xs uppercase text-paper sm:col-span-3">
        Collected, cleaned, delivered.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */

const projectSpans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

export default function Home() {
  return (
    <>
      {/* <GhostCursor
        color="#1852cf"
        size={80}
        trailLength={50}
        inertia={0.1}
        turbulence={0.5}
        drift={0.3}
        bloomStrength={0.6}
        grainIntensity={0.05}
        detail={1}
        brightness={1}
        bloomRadius={1}
        edgeIntensity={0}
        fadeDelayMs={1000}
        fadeDurationMs={1500}
        clickPuff
        intro
      /> */}

      <SplashCursor
        rainbow={false}
        colors={['#093fd3', '#08e62d']}
        size={1}
        force={1}
        swirl={3}
        trail={1}
        clickSplash
        colorSpeed={1}
        intensity={1}
        momentum={1}
        shading={1}
        glow={0}
        quality="high"
        intro
        contained={false}
      />
      <JsonLd />

      {/* ---------------------------- NAV ---------------------------- */}
      <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
        <div className="mx-auto flex max-w-[90rem] items-stretch">
          <a
            href="#home"
            className="flex items-center border-r-[3px] border-ink px-4 py-3 font-mono text-sm font-bold sm:px-6"
          >
            {initials}.cv
          </a>

          <nav
            aria-label="Main"
            className="no-scrollbar flex flex-1 overflow-x-auto"
          >
            {nav.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 whitespace-nowrap border-r-[3px] border-ink px-4 py-3 font-mono text-xs font-bold uppercase hover:bg-ink hover:text-paper"
              >
                <span className="opacity-50">{pad(i)}</span>
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={profile.cvUrl}
            download
            className="hidden items-center bg-ink px-6 font-mono text-xs font-bold uppercase text-paper hover:bg-paper hover:text-ink md:flex"
          >
            Download CV ↓
          </a>
        </div>
      </header>

      <main id="content">
        {/* --------------------------- HERO --------------------------- */}
        <section
          id="home"
          className="overflow-hidden border-b-[3px] border-ink"
        >
          <div className="mx-auto max-w-[90rem] px-4 pt-8 sm:px-8">
            <div className="flex flex-wrap justify-between gap-2 font-mono text-xs uppercase">
              <span>CV / {site.copyrightYear}</span>
              <span className="hidden sm:inline">{profile.location}</span>
              <span>Rev. {site.lastUpdated}</span>
            </div>

            <h1 className="relative mt-6 select-none">
              <span className="sr-only">{firstName} </span>

              <TechText
                text={profile.nickname.toUpperCase()}
                fontWeight={900}
                fontSize={320}
                letterSpacing={-0.06}
                align="left"
                reveal="letter"
                intro="type"
                introDuration={1.6}
                style={{
                  zIndex: "99999999",
                  width: "82vw",
                  height: "min(26.4vw, 384px)",
                  marginTop: "calc(min(4.95vw, 72px) * -1 + 1.4vw)",
                  marginBottom: "calc(min(4.95vw, 72px) * -1 + 0.4vw)",
                  marginLeft: "calc(-4.1vw + 1vw)",
                }}
              />

              <span className="outline-text -mt-[0.02em] ml-[6vw] block text-[clamp(3rem,14vw,13rem)] font-black uppercase leading-[0.85] tracking-[-0.05em]">
                {lastName}
              </span>

              <span
                aria-hidden
                className="absolute right-2 top-full z-10 mt-1 rotate-6 border-[3px] border-ink bg-ink px-4 py-2 font-mono text-xs font-bold uppercase text-paper shadow-[6px_6px_0_0_#f3f3f1] sm:right-[6%] sm:top-[42%] sm:mt-0 sm:text-base"
              >
                {profile.focus}
              </span>
            </h1>

            <div className="mt-12 grid gap-10 pb-14 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="inline-flex items-center gap-2 border-[3px] border-ink px-3 py-1 font-mono text-xs font-bold uppercase">
                  <span className="h-2.5 w-2.5 animate-pulse bg-ink motion-reduce:animate-none" />
                  {profile.status}
                </p>

                <p className="mt-6 font-mono text-sm font-bold uppercase">
                  {profile.role}
                </p>
                <p className="mt-3 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
                  {profile.headline}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {profile.stickers.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={profile.cvUrl} download className="btn btn-ink">
                    Download CV ↓
                  </a>
                  <a href={`mailto:${profile.email}`} className="btn">
                    Email me
                  </a>
                </div>

                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm font-bold uppercase">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[3px] underline-offset-4 hover:bg-ink hover:text-paper"
                      >
                        {s.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6">
                <RawClean />
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-2 border-t-[3px] border-ink md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-b-[3px] border-r-[3px] border-ink p-5 last:border-r-0 md:border-b-0 md:last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r-[3px]"
              >
                <dd className="text-5xl font-black leading-none tracking-tight sm:text-6xl">
                  {s.value}
                </dd>
                <dt className="mt-2 font-mono text-xs uppercase">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* ------------------------- MARQUEE -------------------------- */}
        <div
          aria-hidden="true"
          className="marquee overflow-hidden border-b-[3px] border-ink bg-ink py-4 text-paper"
        >
          <div className="marquee-track">
            {[0, 1].map((half) => (
              <ul key={half} className="flex shrink-0 items-center">
                {skills
                  .flatMap((g) => g.items)
                  .map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-8 pr-8 text-4xl font-black uppercase sm:text-6xl"
                    >
                      <span>{item}</span>
                      <span className="outline-text on-dark">✱</span>
                    </li>
                  ))}
              </ul>
            ))}
          </div>
        </div>

        {/* --------------------------- ABOUT -------------------------- */}
        <Section id="about" index="01" title="About">
          <h3 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            {profile.aboutHeadline}
          </h3>

          <div className="mt-10 gap-10 text-lg leading-relaxed md:columns-2">
            {profile.about.map((paragraph, i) => (
              <p
                key={paragraph}
                className={`mb-5 break-inside-avoid ${i === 0 ? "dropcap" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-10 border-t-[3px] border-ink font-mono text-sm">
            {[
              { label: "Location", value: profile.location },
              { label: "University", value: education[0].school },
              { label: "Focus", value: profile.focus },
              { label: "Status", value: profile.status },
            ].map((f) => (
              <div
                key={f.label}
                className="grid grid-cols-[7rem_1fr] gap-4 border-b-[3px] border-ink px-1 py-3 sm:grid-cols-[10rem_1fr]"
              >
                <dt className="uppercase text-mute">{f.label}</dt>
                <dd className="font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* -------------------------- SKILLS -------------------------- */}
        <Section id="skills" index="02" title="Skills">
          <div className="border-t-[3px] border-ink">
            {skills.map((group, i) => (
              <div
                key={group.group}
                className="grid gap-3 border-b-[3px] border-ink px-1 py-6 transition-colors hover:bg-ink hover:text-paper sm:grid-cols-[14rem_1fr] sm:px-4"
              >
                <p className="font-mono text-sm font-bold uppercase">
                  <span className="opacity-50">{pad(i)}</span> {group.group}
                </p>
                <ul className="slash-list flex flex-wrap text-2xl font-black sm:text-4xl">
                  {group.items.map((item) => (
                    <li key={item} className="mr-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ------------------------ EXPERIENCE ------------------------ */}
        <Section id="experience" index="03" title="Experience">
          <ol className="space-y-10">
            {experience.map((job, i) => (
              <li
                key={`${job.role}-${job.period}`}
                className={
                  i % 2 === 0
                    ? "sm:mr-auto sm:w-[94%]"
                    : "sm:ml-auto sm:w-[94%]"
                }
              >
                <article className="hard">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-ink bg-ink px-5 py-3 font-mono text-xs uppercase text-paper">
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="p-5 sm:p-7">
                    <p className="text-4xl font-black leading-none tracking-tight sm:text-6xl">
                      {job.period}
                    </p>
                    <h3 className="mt-5 text-2xl font-bold">{job.role}</h3>
                    <p className="text-mute">{job.company}</p>

                    <ul className="mt-5 space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span aria-hidden className="font-mono font-bold">
                            →
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        {/* ------------------------- PROJECTS ------------------------- */}
        <Section id="projects" index="04" title="Projects">
          <div className="grid gap-8 md:grid-cols-12">
            {projects.map((p, i) => {
              const dark = i % 2 === 1;
              return (
                <article
                  key={p.title}
                  className={`hard hard-hover flex flex-col p-6 ${projectSpans[i % projectSpans.length]
                    } ${dark ? "on-dark bg-ink text-paper" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="outline-text text-6xl font-black leading-none">
                      {pad(i)}
                    </span>
                    <span className="font-mono text-xs font-bold">
                      {p.year}
                    </span>
                  </div>

                  <h3 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-relaxed">{p.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className={`tag ${dark ? "border-paper" : ""}`}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {(p.demo || p.repo) && (
                    <div className="mt-6 flex flex-wrap gap-4">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn ${dark ? "" : "btn-ink"}`}
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
                          className={`btn ${dark
                            ? "border-paper bg-transparent text-paper shadow-none"
                            : ""
                            }`}
                          aria-label={`Source code of ${p.title}`}
                        >
                          Source ↗
                        </a>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </Section>

        {/* ------------------------ EDUCATION ------------------------- */}
        <Section id="education" index="05" title="Education">
          <ol className="border-t-[3px] border-ink">
            {education.map((e) => {
              const [from, to] = e.period.split(" - ");
              return (
                <li
                  key={e.school}
                  className="grid gap-4 border-b-[3px] border-ink py-8 sm:grid-cols-[minmax(0,17rem)_1fr]"
                >
                  <p className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl">
                    <span className="block">{from} –</span>
                    <span className="block">{to}</span>
                  </p>
                  <div>
                    <h3 className="text-2xl font-black uppercase">
                      {e.school}
                    </h3>
                    <p className="font-mono text-sm font-bold">{e.major}</p>
                    <p className="mt-3 max-w-xl">{e.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          {certifications.length > 0 && (
            <div className="mt-14">
              <p className="mb-5 font-mono text-sm font-bold uppercase">
                Certifications
              </p>
              <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <a
                      href={c.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hard-sm hard-hover flex h-full flex-col border-dashed p-4"
                    >
                      <span className="font-mono text-xs font-bold">
                        {c.year}
                      </span>
                      <span className="mt-2 flex-1 text-xl font-black leading-tight">
                        {c.name}
                      </span>
                      <span className="mt-3 font-mono text-xs uppercase text-mute">
                        {c.issuer} · View ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Section>

        {/* ------------------------- CONTACT -------------------------- */}
        <section
          id="contact"
          className="on-dark relative overflow-hidden border-b-[3px] border-ink bg-ink text-paper"
        >
          {/* Teks (di atas canvas, tapi tidak menghalangi drag) */}
          <div className="pointer-events-none relative z-10 mx-auto grid max-w-[90rem] gap-8 px-4 py-16 sm:px-8 sm:py-24 lg:min-h-[48rem] lg:grid-cols-12">
            <header className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <p className="outline-text text-7xl font-black leading-none lg:text-[8rem]">
                  06
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                  Contact
                </h2>
              </div>
            </header>

            <div className="lg:col-span-5">
              <p className="font-mono text-sm uppercase">{profile.status}</p>
              <p className="mt-4 text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.05em]">
                Say hi.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="pointer-events-auto mt-10 inline-block break-all text-2xl font-black underline decoration-4 underline-offset-8 hover:bg-paper hover:text-ink sm:text-3xl xl:text-4xl"
              >
                {profile.email}
              </a>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={profile.cvUrl}
                  download
                  className="btn pointer-events-auto"
                >
                  Download CV ↓
                </a>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn pointer-events-auto border-paper bg-transparent text-paper shadow-none hover:bg-paper hover:text-ink"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Lanyard: HP di bawah teks, desktop menutupi seluruh section */}
          <div
            className="relative ml-20 h-[34rem] w-full lg:absolute lg:inset-0 lg:z-0 lg:h-auto"
            aria-label="Kartu ID interaktif, seret atau klik untuk membalik"
          >
            <Lanyard
              frontImage="/card-front.png"
              backImage="/card-back.png"
              cardColor="#f3f3f1"
              strapColor="#f3f3f1"
              metal="silver"
              finish="matte"
              cornerRadius={0.1}
              size={0.5}
              strapLength={0.4}
              anchor="right"
              gravity={1}
              breeze={0.4}
              intro={false}
            />
          </div>
        </section>
      </main>

      {/* -------------------------- FOOTER --------------------------- */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-3 px-4 py-6 font-mono text-xs uppercase sm:px-8">
          <p>
            © {site.copyrightYear} {profile.name}
          </p>
          <p>Rev. {site.lastUpdated}</p>
          <a href="#home" className="no-print hover:underline">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}