import type { InputHTMLAttributes } from "react";

type AuthFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function AuthField({ label, ...props }: AuthFieldProps) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-[var(--ink)]">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-[var(--ink)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
      />
    </label>
  );
}
