export interface ErrorLog {
    message: string,
    error: MongoDBErrorLog | string,
}

interface MongoDBErrorLog {
    code: number,
    message: string,
}