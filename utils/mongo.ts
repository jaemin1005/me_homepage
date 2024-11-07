/**
 * 전역 변수에 mongodb client 선언
 * Amplify, Vercel 같은 환경에서는 백엔드 API들이 서버리스 환경에서 실행되게 됨
 * 함수가 별도의 인스턴스로 실행될 수 있으며, 인스턴스 간에 상태나 연결이 자동으로 유지되지 않기 때문에
 * 전역으로 선언한다.
 */
import { MongoClient, MongoClientOptions } from "mongodb";

const uri: string = process.env.MONGODB_URI!;
const options: MongoClientOptions = {
  maxPoolSize: 1, // 서버리스 환경에서는 작은 풀 사이즈가 적합
  minPoolSize: 1, // 최소 풀 사이즈도 1로 설정
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
  retryWrites: true,
  retryReads: true
};

// 전역 타입 선언
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 개발 환경에서 핫 리로딩 시 연결이 재사용되도록 전역 캐싱
if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

const clientPromise = global._mongoClientPromise!;

export default clientPromise;