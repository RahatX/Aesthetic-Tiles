import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl">Build spaces with personality.</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
            Aesthetic Tiles curates tactile surfaces for homes, cafes, and bold
            commercial interiors. Explore premium tile stories that feel modern,
            warm, and livable.
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-white/60">
            Social Media
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
            <Link href="https://facebook.com" target="_blank">
              Facebook
            </Link>
            <Link href="https://instagram.com" target="_blank">
              Instagram
            </Link>
            <Link href="https://pinterest.com" target="_blank">
              Pinterest
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-white/60">
            Contact Us
          </h3>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <p>Dhaka Design Hub, Road 12, Banani</p>
            <p>support@aesthetictiles.dev</p>
            <p>+880 1700-112233</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
