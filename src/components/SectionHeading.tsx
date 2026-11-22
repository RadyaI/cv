type Props = {
  index: string;
  title: string;
  hint?: string;
};

export default function SectionHeading({ index, title, hint }: Props) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-accent">
        <span className="text-muted">{"// "}</span>
        {index}
      </p>
      <div className="mt-2 flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <span aria-hidden className="hidden h-px flex-1 bg-line sm:block" />
      </div>
      {hint && <p className="mt-3 max-w-2xl text-muted">{hint}</p>}
    </div>
  );
}
