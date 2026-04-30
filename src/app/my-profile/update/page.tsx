import { UpdateProfileForm } from "@/components/profile/UpdateProfileForm";
import { requireSession } from "@/lib/session";

export default async function UpdateProfilePage() {
  const session = await requireSession("/my-profile/update");

  return (
    <section className="mx-auto grid min-h-[70vh] max-w-5xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
          Update Profile
        </p>
        <h1 className="mt-4 font-display text-5xl text-[var(--ink)]">
          Refresh your gallery identity
        </h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">
          Change your name and image URL from this protected route using Better
          Auth&apos;s user update flow.
        </p>
      </div>

      <UpdateProfileForm
        defaultName={session.user.name}
        defaultImage={session.user.image ?? ""}
      />
    </section>
  );
}
