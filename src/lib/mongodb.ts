import { MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";

const defaultUri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/tile-gallery";
const useInMemoryMongo =
  process.env.NODE_ENV === "development" &&
  process.env.USE_IN_MEMORY_MONGO === "true";

declare global {
  var mongoClient: MongoClient | undefined;
  var mongoMemoryServer: MongoMemoryServer | undefined;
}

const uri = useInMemoryMongo
  ? await (async () => {
      const memoryServer =
        global.mongoMemoryServer ?? (await MongoMemoryServer.create());

      if (!global.mongoMemoryServer) {
        global.mongoMemoryServer = memoryServer;
      }

      return memoryServer.getUri("tile-gallery");
    })()
  : defaultUri;

export const mongoClient =
  global.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  global.mongoClient = mongoClient;
}
