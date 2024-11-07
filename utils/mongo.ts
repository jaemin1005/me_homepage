/**
 * 전역 변수에 mongodb client 선언
 * Amplify, Vercel 같은 환경에서는 백엔드 API들이 서버리스 환경에서 실행되게 됨
 * 함수가 별도의 인스턴스로 실행될 수 있으며, 인스턴스 간에 상태나 연결이 자동으로 유지되지 않기 때문에
 * 전역으로 선언한다.
 */
import { MongoClient, MongoClientOptions } from "mongodb";

const uri: string = process.env.MONGODB_URI!;
const options: MongoClientOptions = {
  maxPoolSize: 1,              
  minPoolSize: 0,              
  serverSelectionTimeoutMS: 60000, 
  socketTimeoutMS: 60000,      
  connectTimeoutMS: 60000,      
  retryWrites: true,           
  retryReads: true,             
  waitQueueTimeoutMS: 10000    
};

// 전역 타입 선언
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // 개발 환경에서만 전역 캐싱 사용
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 프로덕션 환경에서는 항상 새로운 클라이언트 생성
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
