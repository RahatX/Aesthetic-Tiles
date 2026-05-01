"use client";

import Image from "next/image";
import { User2 } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type AvatarProps = {
  name?: string | null;
  image?: string | null;
  className?: string;
  iconClassName?: string;
};

export function Avatar({
  name,
  image,
  className,
  iconClassName,
}: AvatarProps) {
  const [broken, setBroken] = useState(false);

  const initials = useMemo(() => {
    if (!name) {
      return "AT";
    }

    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  }, [name]);

  if (image && !broken) {
    return (
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={name ?? "User avatar"}
          fill
          unoptimized
          sizes="96px"
          className={cn("object-cover", className)}
          onError={() => setBroken(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid h-full w-full place-items-center bg-[linear-gradient(145deg,rgba(47,93,80,0.92),rgba(30,41,33,0.86))] text-white",
        className,
      )}
    >
      {name ? (
        <span className="text-sm font-bold uppercase tracking-[0.22em]">
          {initials}
        </span>
      ) : (
        <User2 className={cn("size-5", iconClassName)} />
      )}
    </div>
  );
}
