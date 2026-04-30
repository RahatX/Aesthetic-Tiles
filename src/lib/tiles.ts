import { tiles } from "@/data/tiles";

export function getAllTiles(search?: string) {
  const query = search?.trim().toLowerCase();

  if (!query) {
    return tiles;
  }

  return tiles.filter((tile) => tile.title.toLowerCase().includes(query));
}

export function getFeaturedTiles(limit = 4) {
  return tiles.filter((tile) => tile.featured).slice(0, limit);
}

export function getTileById(id: string) {
  return tiles.find((tile) => tile.id === id);
}
