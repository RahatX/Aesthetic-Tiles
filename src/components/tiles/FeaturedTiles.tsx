"use client";

import { useEffect, useState } from "react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { TileCard } from "@/components/tiles/TileCard";
import type { Tile } from "@/types/tile";

export function FeaturedTiles() {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadTiles() {
      try {
        setLoading(true);
        const response = await fetch("/api/tiles?featured=true&limit=4", {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load featured tiles.");
        }

        const data = (await response.json()) as Tile[];
        setTiles(data);
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          setError("Unable to load featured tiles right now.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadTiles();

    return () => controller.abort();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Featured Tiles"
        title="Four gallery picks to set the mood of a room"
        description="These handpicked surfaces are loaded from the server and chosen for visual punch, texture, and adaptability."
      />

      {loading ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
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
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      )}
    </section>
  );
}
