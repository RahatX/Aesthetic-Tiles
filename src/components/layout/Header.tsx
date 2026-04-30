"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-tiles", label: "All Tiles" },
  { href: "/my-profile", label: "My Profile" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/"),
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(248,244,236,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--brand)] text-sm font-bold uppercase tracking-[0.3em] text-white">
            AT
          </span>
          <div>
            <p className="font-display text-xl text-[var(--ink)]">Aesthetic Tiles</p>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              gallery studio
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 p-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-[var(--ink)] text-white"
                    : "text-[var(--muted)] hover:bg-[var(--sand)] hover:text-[var(--ink)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="h-10 w-24 animate-pulse rounded-full bg-[var(--sand)]" />
          ) : session?.user ? (
            <>
              <Link
                href="/my-profile"
                className="hidden text-sm font-medium text-[var(--muted)] sm:inline-flex"
              >
                {session.user.name}
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--sand)]"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
