import Image from "next/image";
import cv from "@/data/cv.json";

const { profile, socials } = cv;

const [focusFirst, ...focusRest] = profile.focus.split(" ");

const heroLinks = socials.filter(
  (s) => s.url && ["GitHub", "LinkedIn"].includes(s.label),
);

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="judul-utama"
      className="mx-auto grid max-w-6xl gap-12 px-4 pb-12 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:grid-cols-[1.4fr_1fr] lg:items-center"
    >
      {/* ============ KIRI ============ */}
      <div>
        <p
          lang="en"
          className="inline-flex items-center gap-2 border-[3px] border-ink bg-mint px-3 py-1 font-mono text-xs font-bold uppercase sm:text-sm"
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-ink"
          />
          {profile.status}
        </p>

        <h1 id="judul-utama" className="mt-6">
          <span className="block font-mono text-sm font-bold uppercase tracking-widest sm:text-base">
            {profile.name}
          </span>
          <span className="mt-3 block break-words text-[1.9rem] font-black uppercase leading-[1.1] sm:text-6xl lg:text-[4.25rem]">
            {focusFirst}{" "}
            <span className="inline-block border-[3px] border-ink bg-brand px-2 shadow-brutal-sm">
              {focusRest.join(" ")}
            </span>
          </span>
        </h1>

        <p className="mt-6 border-l-[6px] border-ink pl-3 font-mono text-sm font-bold sm:text-base">
          {profile.role} · {profile.location}
        </p>

        <p className="mt-5 max-w-xl text-lg leading-relaxed sm:text-xl">
          {profile.headline}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {profile.heroSkills.map((skill) => (
            <li key={skill} className="tag bg-paper">
              {skill}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {profile.cvUrl && (
            <a href={profile.cvUrl} download className="btn btn-primary">
              Download CV (PDF)
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="btn">
            Contact Me
          </a>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm font-bold">
          {heroLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer me"
                className="underline decoration-2 underline-offset-4 hover:bg-brand"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ============ KANAN ============ */}
      <aside
        aria-label="Profile summary"
        className="mx-auto w-full max-w-md space-y-8 lg:max-w-none"
      >
        {/* Foto + blok warna offset + stiker */}
        <div className="relative mb-3 mr-3">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 border-[3px] border-ink bg-rose"
          />
          <div className="relative aspect-square overflow-hidden border-[3px] border-ink bg-sky">
            <Image
              src="/images/Radya.jpg"
              alt={`Photo of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 448px, 100vw"
              className="object-cover object-top"
            />
          </div>

          <span className="absolute -right-3 -top-3 z-10 rotate-3 border-[3px] border-ink bg-brand px-3 py-1 font-mono text-xs font-bold uppercase shadow-brutal-sm sm:text-sm">
            {profile.stickers[0]}
          </span>
          <span className="absolute -left-3 bottom-6 z-10 -rotate-3 border-[3px] border-ink bg-mint px-3 py-1 font-mono text-xs font-bold uppercase shadow-brutal-sm sm:text-sm">
            {profile.stickers[1]}
          </span>
        </div>

        {/* Kartu bergaya query SQL (dekoratif, statis) */}
        <div className="border-[3px] border-ink bg-ink text-bg">
          <div
            aria-hidden="true"
            className="flex items-center gap-1.5 border-b-[3px] border-bg/20 px-3 py-2"
          >
            <span className="h-3 w-3 border-2 border-bg bg-rose" />
            <span className="h-3 w-3 border-2 border-bg bg-brand" />
            <span className="h-3 w-3 border-2 border-bg bg-mint" />
            <span className="ml-2 font-mono text-xs opacity-60">query.sql</span>
          </div>
          <pre
            aria-hidden="true"
            className="overflow-x-auto px-4 py-4 font-mono text-xs leading-relaxed sm:text-sm"
          >
            <code>
              <span className="text-brand">SELECT</span> name, role{"\n"}
              <span className="text-brand">FROM</span>{" "}
              {profile.nickname.toLowerCase()}
              {"\n"}
              <span className="text-brand">WHERE</span> open_to_internship ={" "}
              <span className="text-mint">TRUE</span>;
            </code>
          </pre>
          <p className="border-t-[3px] border-bg/20 px-4 py-3 font-mono text-xs sm:text-sm">
            <span className="opacity-60">-- contact:</span>{" "}
            <a
              href={`mailto:${profile.email}`}
              className="break-all font-bold underline decoration-2 underline-offset-4 hover:text-brand"
            >
              {profile.email}
            </a>
          </p>
        </div>
      </aside>
    </section>
  );
}