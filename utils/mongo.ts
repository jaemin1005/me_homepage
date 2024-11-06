/**
 * 전역 변수에 mongodb client 선언
 * Aamplify Vercel 같은 환경에서는 백앤드 API들이 서버리스 환경에서 실행되게 됨
 * 함수가 별도의 인스턴스로 실행될 수 있으며, 인스턴스 간에 상태나 연결이 자동으로 유지되지 않기 때문에
 * 전역으로 선언한다.
 */
import { MongoClient, MongoClientOptions } from "mongodb";

const uri: string = process.env.MONGODB_URI!;
const options: MongoClientOptions = {
  maxPoolSize: 10,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// 전역 선언
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

// 전역에 해당 Client를 등록한다.
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

// eslint-disable-next-line prefer-const
clientPromise = global._mongoClientPromise;

export default clientPromise;
