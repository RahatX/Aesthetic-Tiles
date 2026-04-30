type AuthMessageProps = {
  message?: string;
  tone?: "error" | "success";
};

export function AuthMessage({
  message,
  tone = "error",
}: AuthMessageProps) {
  if (!message) {
    return null;
  }

  return (
    <div
      className={`rounded-2xl px-4 py-3 text-sm ${
        tone === "error"
          ? "border border-rose-200 bg-rose-50 text-rose-700"
          : "border border-emerald-200 bg-emerald-50 text-emerald-700"
      }`}
    >
      {message}
    </div>
  );
}
