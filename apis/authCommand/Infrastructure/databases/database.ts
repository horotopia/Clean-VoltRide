import { SequelizeService } from "./sequelize";
import { MongooseService } from "./mongoose";

const connectDB = async (DBType: string): Promise<SequelizeService | MongooseService | undefined> => {
  if (DBType === "pgsql") {
    return await SequelizeService.get();
  };
  if (DBType === "mongo") {
    return await MongooseService.get();
  };
  return undefined;
}

export default connectDB;
