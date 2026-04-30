import { NextResponse } from "next/server";

import { getTileById } from "@/lib/tiles";

type TileRouteProps = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, { params }: TileRouteProps) {
  const { id } = await params;
  const tile = getTileById(id);

  if (!tile) {
    return NextResponse.json({ message: "Tile not found." }, { status: 404 });
  }

  return NextResponse.json(tile);
}
