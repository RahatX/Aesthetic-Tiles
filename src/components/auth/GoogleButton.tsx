"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";

type GoogleButtonProps = {
  callbackURL: string;
};

export function GoogleButton({ callbackURL }: GoogleButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      await authClient.signIn.social({
        provider: "google",
        callbackURL,
      });
    } catch {
      setError("Google sign-in could not be started.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loading}
        className="btn btn-gallery h-12 w-full rounded-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--sand)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Redirecting to Google..." : "Continue with Google"}
      </button>
      {error ? <p className="text-sm text-rose-700">{error}</p> : null}
    </div>
  );
}
