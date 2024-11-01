import { NextResponse } from "next/server";
import clientPromise from "../../../../utils/mongo";

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
        console.error("데이터를 가져오는 중 오류 발생:", error);
        return NextResponse.json({ message: "Server International Error", error }, { status: 500 });
    }
}
