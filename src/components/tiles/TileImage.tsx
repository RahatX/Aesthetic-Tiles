"use client";

import Image from "next/image";
import { useState } from "react";

type TileImageProps = {
  src: string;
  alt: string;
};

export function TileImage({ src, alt }: TileImageProps) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-[1.8rem] bg-[radial-gradient(circle_at_top_left,rgba(187,108,63,0.28),transparent_28%),linear-gradient(145deg,rgba(38,53,43,0.78),rgba(233,223,206,0.78))]">
        <div className="absolute inset-0 backdrop-blur-[18px]" />
        <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border border-white/30 bg-white/18 px-4 py-3 backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.28em] text-white/70">
            Tile Preview
          </p>
          <p className="mt-2 text-xl font-semibold text-white">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      onError={() => setBroken(true)}
    />
  );
}
