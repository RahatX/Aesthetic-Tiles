import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl text-[var(--ink)]">
        That tile path doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">
        The page you are looking for may have been moved, renamed, or never laid
        into the gallery in the first place.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white"
      >
        Back to Home
      </Link>
    </section>
  );
}
