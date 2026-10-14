type Props = {
  id: string;
  no: string;
  title: string;
  sub: string;
};

export default function SectionHeading({ id, no, title, sub }: Props) {
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
