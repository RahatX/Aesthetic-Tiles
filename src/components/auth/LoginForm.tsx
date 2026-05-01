"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AuthField } from "@/components/auth/AuthField";
import { AuthMessage } from "@/components/auth/AuthMessage";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { authClient } from "@/lib/auth-client";

type LoginFormProps = {
  callbackURL: string;
};

function getErrorMessage(error: unknown) {
  if (typeof error === "object" && error !== null) {
    const maybeError = error as { message?: string };
    return maybeError.message ?? "Login failed. Please try again.";
  }

  return "Login failed. Please try again.";
}

export function LoginForm({ callbackURL }: LoginFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    try {
      setLoading(true);
      setError("");

      const result = await authClient.signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL,
      });

      if (result.error) {
        setError(result.error.message ?? "Login failed. Please try again.");
        return;
      }

      router.push(callbackURL);
      router.refresh();
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 rounded-[2rem] border border-[var(--border)] bg-white/80 p-8 shadow-[0_24px_80px_rgba(26,35,28,0.08)]">
      <AuthMessage message={error} />
      <form
        action={async (formData) => {
          await handleSubmit(formData);
        }}
        className="space-y-4"
      >
        <AuthField name="email" type="email" label="Email" required />
        <AuthField name="password" type="password" label="Password" required />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-gallery-primary h-12 w-full rounded-full px-4 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <GoogleButton callbackURL={callbackURL} />

      <p className="text-sm text-[var(--muted)]">
        New here?{" "}
        <Link href="/register" className="font-semibold text-[var(--accent)]">
          Create an account
        </Link>
      </p>
    </div>
  );
}
