import { MongooseService } from "./mongoose";
declare const connectDB: (DBType: string) => Promise<MongooseService | undefined>;
export default connectDB;
