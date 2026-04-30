import Image from "next/image";
import Link from "next/link";

import { requireSession } from "@/lib/session";

export default async function MyProfilePage() {
  const session = await requireSession("/my-profile");

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] border border-[var(--border)] bg-white/80 p-8 shadow-[0_24px_80px_rgba(26,35,28,0.08)]">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
          Private Profile
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
          <div className="relative h-44 w-44 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--sand)]">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name}
                fill
                unoptimized
                className="object-cover"
                sizes="176px"
              />
            ) : null}
          </div>

          <div>
            <h1 className="font-display text-5xl text-[var(--ink)]">
              {session.user.name}
            </h1>
            <p className="mt-3 text-base text-[var(--muted)]">{session.user.email}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[var(--paper)] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                  User ID
                </p>
                <p className="mt-2 break-all text-sm text-[var(--ink)]">
                  {session.user.id}
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--paper)] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                  Account Status
                </p>
                <p className="mt-2 text-sm font-semibold text-emerald-700">
                  Signed in
                </p>
              </div>
            </div>
            <Link
              href="/my-profile/update"
              className="btn btn-gallery mt-8 inline-flex rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
