import Link from "next/link";

import { TileImage } from "@/components/tiles/TileImage";
import type { Tile } from "@/types/tile";
import { formatCurrency } from "@/lib/utils";

type TileCardProps = {
  tile: Tile;
};

export function TileCard({ tile }: TileCardProps) {
  return (
    <article className="tile-card group animate__animated animate__fadeInUp">
      <div className="relative h-64 overflow-hidden rounded-[1.8rem]">
        <TileImage src={tile.image} alt={tile.title} />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
            {tile.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">
            {tile.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-7 text-[var(--muted)]">
            {tile.description}
          </p>
        </div>
        <p className="badge badge-lg whitespace-nowrap border-0 bg-[var(--sand)] px-3 py-3 text-sm font-semibold text-[var(--ink)]">
          {formatCurrency(tile.price, tile.currency)}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span
          className={`badge badge-outline rounded-full px-3 py-3 text-xs font-semibold uppercase tracking-[0.25em] ${
            tile.inStock
              ? "border-emerald-200 bg-emerald-100 text-emerald-700"
              : "border-rose-200 bg-rose-100 text-rose-700"
          }`}
        >
          {tile.inStock ? "In Stock" : "Sold Out"}
        </span>
        <Link
          href={`/tile/${tile.id}`}
          className="btn btn-sm btn-gallery-ghost rounded-full px-4 text-sm font-semibold"
        >
          Details
        </Link>
      </div>
    </article>
  );
}
