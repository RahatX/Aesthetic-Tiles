import { NextRequest, NextResponse } from "next/server";

import { getAllTiles, getFeaturedTiles } from "@/lib/tiles";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search") ?? undefined;
  const featured = request.nextUrl.searchParams.get("featured");
  const limit = Number(request.nextUrl.searchParams.get("limit") ?? "0");

  const data =
    featured === "true"
      ? getFeaturedTiles(limit || 4)
      : getAllTiles(search).slice(0, limit || undefined);

  return NextResponse.json(data);
}
