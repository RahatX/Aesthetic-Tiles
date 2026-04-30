import { redirect } from "next/navigation";

import { LoginForm } from "@/components/auth/LoginForm";
import { getServerSession } from "@/lib/session";

type LoginPageProps = {
  searchParams: Promise<{ callback?: string; registered?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  const params = await searchParams;
  const callbackURL = params.callback ?? "/";

  return (
    <section className="mx-auto grid min-h-[75vh] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
          Login
        </p>
        <h1 className="mt-4 font-display text-5xl text-[var(--ink)]">
          Welcome back to the gallery
        </h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">
          You can reach this page from the navbar login button or whenever a
          private tile detail page asks you to sign in first.
        </p>
        {params.registered ? (
          <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Registration successful. Please log in to continue.
          </p>
        ) : null}
      </div>
      <LoginForm callbackURL={callbackURL} />
    </section>
  );
}
