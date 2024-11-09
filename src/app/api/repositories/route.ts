import { NextResponse } from "next/server";
import clientPromise from "../../../../utils/mongo";
import { MongoServerError } from "mongodb";

export async function GET() {
  const dbName = process.env.MONGODB_DATABASE;
  const collectionName = process.env.MONGODB_COLLECTION;

  if (dbName === undefined || collectionName === undefined) {
    return NextResponse.json({ message: "Env Parsing Error" }, { status: 500 });
  }

  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const repositories = await db.collection(collectionName).find({}).toArray();

    // JSON 응답 반환
    return NextResponse.json({ repositories });
  } catch (error) {
    console.error("Database operation failed:", error);

    if (error instanceof MongoServerError) {
      return NextResponse.json(
        {
          message: "Database error",
          error: {
            code: error.code,
            message: error.message,
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
