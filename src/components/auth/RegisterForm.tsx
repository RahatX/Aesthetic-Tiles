"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

import { AuthField } from "@/components/auth/AuthField";
import { AuthMessage } from "@/components/auth/AuthMessage";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { Avatar } from "@/components/shared/Avatar";
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
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [imageName, setImageName] = useState("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setImageDataUrl("");
      setImageName("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageDataUrl(String(reader.result ?? ""));
      setImageName(file.name);
    };
    reader.onerror = () => {
      setError("Could not read the selected image file.");
      setImageDataUrl("");
      setImageName("");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (formData: FormData) => {
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    try {
      setLoading(true);
      setError("");

      if (!imageDataUrl) {
        setError("Please choose an image file from your device.");
        return;
      }

      const result = await authClient.signUp.email({
        name,
        email,
        password,
        image: imageDataUrl,
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
        <label className="block space-y-3">
          <span className="text-sm font-medium text-[var(--ink)]">
            Profile Image
          </span>
          <div className="flex items-center gap-4 rounded-[1.7rem] border border-[var(--border)] bg-[var(--paper)] px-4 py-4">
            <div className="h-16 w-16 overflow-hidden rounded-full border border-white/60 shadow-sm">
              <Avatar name={imageName || "User"} image={imageDataUrl || null} />
            </div>
            <div className="flex-1">
              <input
                name="image-file"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input file-input-bordered w-full rounded-2xl border-[var(--border)] bg-white"
                required
              />
              <p className="mt-2 text-xs text-[var(--muted)]">
                Select a photo from your device instead of pasting a URL.
              </p>
            </div>
          </div>
        </label>
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
          className="btn btn-gallery-primary h-12 w-full rounded-full px-4 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
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
