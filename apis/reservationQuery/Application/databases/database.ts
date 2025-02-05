import { SequelizeService } from "./sequelize.service";
import { MongooseService } from "./mongoose.service";

type DBType = 'pgsql' | 'mongo';

const connectDB = async (DBType: DBType): Promise<SequelizeService|MongooseService> => {
  if (DBType === "pgsql") {
    return await SequelizeService.get();;
  };
  if (DBType === "mongo") {
    return await MongooseService.get();
  };
}

export default connectDB;
