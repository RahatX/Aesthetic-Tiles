import Image from "next/image";
import Link from "next/link";

import type { Tile } from "@/types/tile";
import { formatCurrency } from "@/lib/utils";

type TileCardProps = {
  tile: Tile;
};

export function TileCard({ tile }: TileCardProps) {
  return (
    <article className="tile-card group animate__animated animate__fadeInUp">
      <div className="relative h-64 overflow-hidden rounded-[1.8rem]">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
        <p className="whitespace-nowrap rounded-full bg-[var(--sand)] px-3 py-1 text-sm font-semibold text-[var(--ink)]">
          {formatCurrency(tile.price, tile.currency)}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${
            tile.inStock
              ? "bg-emerald-100 text-emerald-700"
              : "bg-rose-100 text-rose-700"
          }`}
        >
          {tile.inStock ? "In Stock" : "Sold Out"}
        </span>
        <Link
          href={`/tile/${tile.id}`}
          className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--ink)] hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
