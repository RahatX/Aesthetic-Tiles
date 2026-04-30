type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl text-[var(--ink)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}
