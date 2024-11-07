import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import { Readable } from "stream";

const s3Client = new S3Client({
  region: process.env.REGION_S3,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});

export async function GET() {
  const bucketName = process.env.S3_BUCKET_NAME!;
  const fileName = process.env.FILE_NAME!;

  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: fileName,
    });

    const response = await s3Client.send(command);

    // 스트림 형식을 .json파일을 읽는다
    const stream = response.Body as Readable;
    let data = "";
    for await (const chunk of stream) {
      data += chunk;
    }

    // json 데이터 파싱
    const jsonData = JSON.parse(data);

    return NextResponse.json({ repositories: jsonData });
  } catch (error) {
    console.error("Error reading file from S3:", error);
    return NextResponse.json({
        message: "S3 Api Route Error",
        error: error instanceof Error ? error.message : "Unknown error"
    })
  }
}
