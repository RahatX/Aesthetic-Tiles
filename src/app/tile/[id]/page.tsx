import Image from "next/image";
import { notFound } from "next/navigation";

import { getTileById } from "@/lib/tiles";
import { requireSession } from "@/lib/session";
import { formatCurrency } from "@/lib/utils";

type TileDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function TileDetailsPage({
  params,
}: TileDetailsPageProps) {
  const { id } = await params;
  await requireSession(`/tile/${id}`);

  const tile = getTileById(id);

  if (!tile) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-white/70 shadow-[0_24px_80px_rgba(26,35,28,0.08)]">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="rounded-[2.5rem] border border-[var(--border)] bg-white/80 p-8 shadow-[0_24px_80px_rgba(26,35,28,0.08)]">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
            {tile.category}
          </p>
          <h1 className="mt-4 font-display text-5xl text-[var(--ink)]">
            {tile.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            {tile.description}
          </p>

          <div className="mt-8 grid gap-4 rounded-[2rem] bg-[var(--paper)] p-5 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                Creator
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                {tile.creator}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                Price
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                {formatCurrency(tile.price, tile.currency)}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                Dimensions
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                {tile.dimensions}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                Material
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                {tile.material}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-[var(--ink)]">
              Style Description
            </h2>
            <p className="mt-3 text-base leading-8 text-[var(--muted)]">
              {tile.styleDescription}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-[var(--ink)]">Tags</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {tile.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--sand)] px-4 py-2 text-sm font-medium text-[var(--ink)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
