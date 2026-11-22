import cv from "@/data/cv.json";

const pipeline = [
  { step: "Extract", note: "collect" },
  { step: "Transform", note: "clean" },
  { step: "Load", note: "deliver" },
];

export default function Hero() {
  const { profile, stats, socials } = cv;

  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.status}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name.replace(profile.nickname, "").trim()}{" "}
            <span className="text-accent">{profile.nickname}</span>
          </h1>

          <p className="mt-4 font-mono text-sm text-cyan sm:text-base">{profile.role}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            {profile.headline}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {profile.stickers.map((s) => (
              <li key={s} className="tag">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.cvUrl} download className="btn btn-primary">
              Download CV ↓
            </a>
            <a href={`mailto:${profile.email}`} className="btn">
              Email me
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
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

        <div className="fade-up [animation-delay:150ms]">
          <div className="card overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-line bg-raised px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-muted">profile.py</span>
            </div>
            <div className="break-words p-5 font-mono text-sm leading-7">
              <p className="text-muted"># who is this?</p>
              <p>
                <span className="text-cyan">class</span>{" "}
                <span className="text-amber">{profile.nickname}</span>:
              </p>
              <p className="pl-6">
                focus = <span className="text-accent">&quot;{profile.focus}&quot;</span>
              </p>
              <p className="pl-6">
                stack = [
                {profile.heroSkills.map((s, i) => (
                  <span key={s}>
                    <span className="text-accent">&quot;{s}&quot;</span>
                    {i < profile.heroSkills.length - 1 ? ", " : ""}
                  </span>
                ))}
                ]
              </p>
              <p className="pl-6">
                status = <span className="text-accent">&quot;{profile.status}&quot;</span>
              </p>
              <p className="mt-2">
                <span className="text-muted">&gt;&gt;&gt;</span> {profile.nickname}().
                <span className="text-cyan">ready_to_work</span>()
                <span
                  aria-hidden
                  className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent motion-reduce:animate-none"
                />
              </p>
            </div>
          </div>

          <ol
            aria-label="Data pipeline"
            className="mt-6 flex items-center gap-2 font-mono text-xs"
          >
            {pipeline.map((p, i) => (
              <li key={p.step} className="flex flex-1 items-center gap-2">
                <div className="card flex-1 px-3 py-2 text-center">
                  <p className="font-bold uppercase text-fg">{p.step}</p>
                  <p className="text-muted">{p.note}</p>
                </div>
                {i < pipeline.length - 1 && (
                  <span aria-hidden className="relative hidden h-px w-6 bg-line sm:block">
                    <span className="flow-dot absolute -top-[3px] h-2 w-2 rounded-full bg-accent" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <dl className="relative mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card card-hover p-4">
            <dd className="font-mono text-3xl font-bold text-accent sm:text-4xl">
              {s.value}
            </dd>
            <dt className="mt-1 text-xs text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
