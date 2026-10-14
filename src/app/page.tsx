import cv from "@/data/cv.json";

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

const navItems = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keterampilan", label: "Skill" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#proyek", label: "Proyek" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#kontak", label: "Kontak" },
];

const accents = ["bg-brand", "bg-sky", "bg-rose", "bg-mint"];

const allSkills = skills.flatMap((group) => group.items);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.nickname,
  url: site.url,
  jobTitle: profile.role,
  description: site.description,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malang",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  alumniOf: education.map((e) => ({
    "@type": "EducationalOrganization",
    name: e.school,
  })),
  knowsAbout: allSkills,
  sameAs: socials.map((s) => s.url).filter(Boolean),
};

// Judul section dipakai berulang, jadi dibuat helper kecil di file ini saja.
function Heading({
  id,
  no,
  title,
  sub,
}: {
  id: string;
  no: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="mb-8 sm:mb-12">
      <p className="font-mono text-xs font-bold uppercase tracking-widest sm:text-sm">
        {no} / {sub}
      </p>
      <h2
        id={id}
        className="mt-2 inline-block border-[3px] border-ink bg-brand px-4 py-2 text-3xl font-black uppercase shadow-brutal-sm sm:text-5xl"
      >
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-bg">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        >
          <a
            href="#beranda"
            className="shrink-0 border-[3px] border-ink bg-ink px-3 py-1 font-mono text-lg font-bold text-bg"
            aria-label={`${profile.name}, ke beranda`}
          >
            RI.
          </a>
          <ul className="no-scrollbar flex items-center gap-1 overflow-x-auto sm:gap-2">
            {navItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className="block border-2 border-transparent px-2.5 py-1 text-sm font-bold hover:border-ink hover:bg-brand sm:px-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="konten">
        {/* ============ HERO ============ */}
        <section
          id="beranda"
          aria-labelledby="judul-utama"
          className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center"
        >
          <div>
            <p className="inline-flex items-center gap-2 border-[3px] border-ink bg-mint px-3 py-1 font-mono text-xs font-bold uppercase sm:text-sm">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-ink"
              />
              {profile.status}
            </p>

            <h1
              id="judul-utama"
              className="mt-6 break-words text-[2.6rem] font-black uppercase leading-[0.95] sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </h1>

            <p className="mt-5 inline-block -rotate-1 border-[3px] border-ink bg-brand px-3 py-1 font-mono text-sm font-bold shadow-brutal-sm sm:text-base">
              {profile.role}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">
              {profile.headline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  download
                  className="btn btn-primary"
                >
                  Unduh CV (PDF)
                </a>
              )}
              <a href={`mailto:${profile.email}`} className="btn">
                Hubungi Saya
              </a>
              <a href="#proyek" className="btn btn-dark">
                Lihat Proyek
              </a>
            </div>
          </div>

          <aside aria-label="Ringkasan profil" className="brutal-card p-5 sm:p-6">
            {/* Ganti kotak ini dengan foto: <Image src="/foto.jpg" ... /> */}
            <div
              aria-hidden="true"
              className="flex aspect-[4/3] items-center justify-center border-[3px] border-ink bg-sky text-7xl font-black sm:text-8xl"
            >
              RI
            </div>
            <dl className="mt-5 space-y-3 font-mono text-sm">
              <div>
                <dt className="text-xs uppercase opacity-60">Kampus</dt>
                <dd className="font-bold">{education[0].school}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase opacity-60">Lokasi</dt>
                <dd className="font-bold">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase opacity-60">Email</dt>
                <dd className="break-all font-bold">
                  <a
                    href={`mailto:${profile.email}`}
                    className="underline decoration-2 underline-offset-4"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* ============ MARQUEE ============ */}
        <div
          aria-hidden="true"
          className="marquee overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-bg"
        >
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0">
                {allSkills.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="px-5 font-mono text-sm font-bold uppercase tracking-wider sm:text-base"
                  >
                    {item} <span className="text-brand">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ============ TENTANG ============ */}
        <section
          aria-labelledby="judul-tentang"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
        >
          <span id="tentang" />
          <Heading id="judul-tentang" no="01" title="Tentang Saya" sub="about" />

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

        {/* ============ KETERAMPILAN ============ */}
        <section
          aria-labelledby="judul-skill"
          className="border-y-[3px] border-ink bg-sky/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <span id="keterampilan" />
            <Heading
              id="judul-skill"
              no="02"
              title="Keterampilan"
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

        {/* ============ PENGALAMAN ============ */}
        <section
          aria-labelledby="judul-pengalaman"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
        >
          <span id="pengalaman" />
          <Heading
            id="judul-pengalaman"
            no="03"
            title="Pengalaman"
            sub="experience"
          />

          <ol className="space-y-8 border-l-[3px] border-ink pl-5 sm:pl-8">
            {experience.map((job, i) => (
              <li key={`${job.role}-${job.company}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.9rem] top-6 h-4 w-4 border-[3px] border-ink bg-brand sm:-left-[2.6rem] sm:h-5 sm:w-5"
                />
                <article className="brutal-card brutal-card-hover p-5 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black sm:text-2xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 font-bold">{job.company}</p>
                    </div>
                    <p
                      className={`tag ${accents[i % accents.length]}`}
                    >
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-2 font-mono text-xs uppercase opacity-70">
                    {job.type} · {job.location}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-ink"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* ============ PROYEK ============ */}
        <section
          aria-labelledby="judul-proyek"
          className="border-y-[3px] border-ink bg-rose/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <span id="proyek" />
            <Heading id="judul-proyek" no="04" title="Proyek" sub="projects" />

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
                          aria-label={`Lihat demo ${project.title}`}
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
                          aria-label={`Lihat kode sumber ${project.title}`}
                        >
                          Kode ↗
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PENDIDIKAN & SERTIFIKASI ============ */}
        <section
          aria-labelledby="judul-pendidikan"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
        >
          <span id="pendidikan" />
          <Heading
            id="judul-pendidikan"
            no="05"
            title="Pendidikan"
            sub="education"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              {education.map((item, i) => (
                <article key={item.school} className="brutal-card p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-black sm:text-xl">
                      {item.school}
                    </h3>
                    <span className={`tag ${accents[i % accents.length]}`}>
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 font-bold">{item.major}</p>
                  <p className="mt-2 leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>

            <div>
              <h3 className="mb-4 inline-block border-[3px] border-ink bg-mint px-3 py-1 text-lg font-black uppercase">
                Sertifikasi
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
        </section>

        {/* ============ KONTAK ============ */}
        <section
          aria-labelledby="judul-kontak"
          className="border-t-[3px] border-ink bg-brand"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <span id="kontak" />
            <p className="font-mono text-xs font-bold uppercase tracking-widest sm:text-sm">
              06 / contact
            </p>
            <h2
              id="judul-kontak"
              className="mt-3 max-w-3xl text-4xl font-black uppercase leading-[1] sm:text-6xl"
            >
              Mari bekerja sama.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              Sedang mencari kesempatan magang atau proyek? Kirim pesan, saya
              usahakan membalas secepatnya.
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
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t-[3px] border-ink bg-ink px-4 py-6 text-center font-mono text-xs text-bg sm:text-sm">
        <p>
          © {site.copyrightYear} {profile.name}. Dibuat dengan Next.js &
        </p>
      </footer>
    </>
  );
}
