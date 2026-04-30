"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { TileCard } from "@/components/tiles/TileCard";
import type { Tile } from "@/types/tile";

export function TilesExplorer() {
  const [search, setSearch] = useState("");
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        const query = search ? `?search=${encodeURIComponent(search)}` : "";
        const response = await fetch(`/api/tiles${query}`, {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch tiles.");
        }

        const data = (await response.json()) as Tile[];
        setTiles(data);
        setError("");
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          setError("We could not load the gallery right now.");
        }
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [search]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[var(--border)] bg-white/70 p-6 shadow-[0_24px_80px_rgba(26,35,28,0.08)]">
        <label
          htmlFor="tile-search"
          className="mb-4 block text-sm uppercase tracking-[0.35em] text-[var(--muted)]"
        >
          Search by title
        </label>
        <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--paper)] px-5 py-4">
          <Search className="size-5 text-[var(--muted)]" />
          <input
            id="tile-search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try Ceramic Blue Tile or Marble Vein Luxe"
            className="w-full bg-transparent text-base text-[var(--ink)] outline-none placeholder:text-[var(--muted)]"
          />
        </div>
      </div>

      {loading ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[24rem] animate-pulse rounded-[2rem] bg-white/60"
            />
          ))}
        </div>
      ) : error ? (
        <p className="mt-10 rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-rose-700">
          {error}
        </p>
      ) : tiles.length === 0 ? (
        <div className="mt-10 rounded-[2rem] border border-dashed border-[var(--border)] bg-white/70 px-6 py-16 text-center">
          <p className="font-display text-3xl text-[var(--ink)]">No tiles matched your search.</p>
          <p className="mt-3 text-[var(--muted)]">
            Try another product name to explore the gallery.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      )}
    </section>
  );
}
