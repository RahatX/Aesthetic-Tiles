import { TilesExplorer } from "@/components/tiles/TilesExplorer";

export default function AllTilesPage() {
  return (
    <div className="pb-10">
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
          Public Gallery
        </p>
        <h1 className="mt-4 font-display text-5xl text-[var(--ink)]">
          Browse every tile in the collection
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
          Search by title and move from inspiration to details in a few clicks.
          Details pages stay protected for signed-in members.
        </p>
      </section>
      <TilesExplorer />
    </div>
  );
}
