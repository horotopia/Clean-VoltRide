// import { SequelizeService } from "./sequelize";
import { MongooseService } from "./mongoose";

const connectDB = async (DBType: string): Promise<MongooseService | undefined> => {
  if (DBType === "mongo") {
    return await MongooseService.get();
  };
  return undefined;
}

export default connectDB;
