"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { AuthField } from "@/components/auth/AuthField";
import { AuthMessage } from "@/components/auth/AuthMessage";
import { authClient } from "@/lib/auth-client";

type UpdateProfileFormProps = {
  defaultName: string;
  defaultImage: string;
};

export function UpdateProfileForm({
  defaultName,
  defaultImage,
}: UpdateProfileFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    const name = String(formData.get("name") ?? "");
    const image = String(formData.get("image") ?? "");

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const result = await authClient.updateUser({
        name,
        image,
      });

      if (result.error) {
        setError(result.error.message ?? "Could not update profile.");
        return;
      }

      setSuccess("Profile updated successfully.");
      router.refresh();
      setTimeout(() => {
        router.push("/my-profile");
      }, 800);
    } catch {
      setError("Could not update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-[var(--border)] bg-white/80 p-8 shadow-[0_24px_80px_rgba(26,35,28,0.08)]">
      <div className="space-y-4">
        <AuthMessage message={error} />
        <AuthMessage message={success} tone="success" />
        <form
          action={async (formData) => {
            await handleSubmit(formData);
          }}
          className="space-y-4"
        >
          <AuthField
            name="name"
            type="text"
            label="Name"
            defaultValue={defaultName}
            required
          />
          <AuthField
            name="image"
            type="url"
            label="Image URL"
            defaultValue={defaultImage}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-gallery h-12 w-full rounded-full bg-[var(--ink)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}
