"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AuthField } from "@/components/auth/AuthField";
import { AuthMessage } from "@/components/auth/AuthMessage";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { authClient } from "@/lib/auth-client";

function getErrorMessage(error: unknown) {
  if (typeof error === "object" && error !== null) {
    const maybeError = error as { message?: string };
    return maybeError.message ?? "Registration failed. Please try again.";
  }

  return "Registration failed. Please try again.";
}

export function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const image = String(formData.get("image") ?? "");
    const password = String(formData.get("password") ?? "");

    try {
      setLoading(true);
      setError("");

      const result = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      if (result.error) {
        setError(result.error.message ?? "Registration failed. Please try again.");
        return;
      }

      router.push("/login?registered=1");
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
        <AuthField name="name" type="text" label="Name" required />
        <AuthField name="email" type="email" label="Email" required />
        <AuthField name="image" type="url" label="Photo URL" required />
        <AuthField
          name="password"
          type="password"
          label="Password"
          minLength={8}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[var(--ink)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <GoogleButton callbackURL="/" />

      <p className="text-sm text-[var(--muted)]">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[var(--accent)]">
          Login here
        </Link>
      </p>
    </div>
  );
}
