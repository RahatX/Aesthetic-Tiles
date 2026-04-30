export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4">
      <div className="rounded-full border border-[var(--border)] bg-white/70 px-6 py-4 text-sm font-semibold text-[var(--muted)] shadow-[0_24px_80px_rgba(26,35,28,0.08)]">
        Loading the gallery...
      </div>
    </div>
  );
}
