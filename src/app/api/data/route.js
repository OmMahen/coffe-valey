import { MongoClient, ServerApiVersion } from "mongodb";
export const dynamic = "force-dynamic";
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const db = client.db("coffee-valey");
  const collection = db.collection(type);
  const query = {};
  const data = await collection.find(query).toArray();
  return Response.json(data);
}
