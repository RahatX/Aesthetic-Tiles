import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/tile-gallery";

declare global {
  var mongoClient: MongoClient | undefined;
}

export const mongoClient =
  global.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  global.mongoClient = mongoClient;
}
