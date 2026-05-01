import { redirect } from "next/navigation";

import { RegisterForm } from "@/components/auth/RegisterForm";
import { getServerSession } from "@/lib/session";

export default async function RegisterPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <section className="mx-auto grid min-h-[75vh] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
          Register
        </p>
        <h1 className="mt-4 font-display text-5xl text-[var(--ink)]">
          Start curating your profile
        </h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">
          Create an account with your name, email, profile image, and password.
          You can also use Google sign-in to join the community faster.
        </p>
      </div>
      <RegisterForm />
    </section>
  );
}
