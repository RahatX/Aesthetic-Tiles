import Link from "next/link";

import { FeaturedTiles } from "@/components/tiles/FeaturedTiles";

export default function HomePage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="animate__animated animate__fadeInLeft">
            <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent)]">
              Curated Tile Gallery
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
              Discover Your Perfect Aesthetic
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Explore statement ceramics, soft stone mosaics, and expressive
              modern surfaces designed to shape memorable rooms.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/all-tiles"
                className="btn btn-gallery-primary rounded-full px-6 py-3 text-sm font-semibold"
              >
                Browse Now
              </Link>
              <Link
                href="/login"
                className="btn btn-gallery-ghost rounded-full px-6 py-3 text-sm font-semibold"
              >
                Login to Save Your Picks
              </Link>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight rounded-[2.5rem] border border-white/40 bg-[rgba(255,255,255,0.55)] p-5 shadow-[0_30px_100px_rgba(26,35,28,0.12)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-[var(--brand)] p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                  Weekly feature
                </p>
                <p className="mt-4 font-display text-3xl">Modern Geometric Patterns</p>
              </div>
              <div className="rounded-[2rem] bg-[var(--sand)] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
                  New arrivals
                </p>
                <p className="mt-4 font-display text-3xl text-[var(--ink)]">
                  Sage, terrazzo, and marble
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-6 sm:col-span-2">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
                  Why designers love this gallery
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  <li>Responsive browsing across phone, tablet, and desktop.</li>
                  <li>Clean details pages for premium presentation.</li>
                  <li>Protected profile and tile detail experience.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[rgba(255,255,255,0.55)] py-4">
        <div className="marquee text-sm uppercase tracking-[0.32em] text-[var(--muted)]">
          <span>
            New Arrivals: Sage Stone Mosaic | Weekly Feature: Modern Geometric
            Patterns | Join the Community and Curate Your Signature Space
          </span>
        </div>
      </section>

      <FeaturedTiles />
    </>
  );
}
