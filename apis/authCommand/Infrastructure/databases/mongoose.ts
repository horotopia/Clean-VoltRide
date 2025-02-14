import { config } from "dotenv";
import { Mongoose, connect } from "mongoose";
import { UserRepository } from "../repositories/mongoose";
import { Adapter } from "./adapter";

config();
export class MongooseService implements Adapter<MongooseService, Mongoose> {
  private static instance?: MongooseService;

  readonly mongoose: Mongoose;
  readonly UserRepository: UserRepository;

  private constructor(mongoose: Mongoose) {
    this.mongoose = mongoose;

    this.UserRepository = new UserRepository(this);
  }

  public static async get(): Promise<MongooseService> {
    if (this.instance !== undefined) {
      return this.instance;
    }
    const connection = await this.connect();
    this.instance = new MongooseService(connection);
    return this.instance;
  }
  
  private static async connect(): Promise<Mongoose> {
    const connection = await connect(process.env.MONGO_URI as string, {
      auth: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
      },
      authSource: "admin",
      dbName: process.env.MONGO_DB,
    });
    return connection;
  }

  public async disconnect(): Promise<void> {
    await this.mongoose.disconnect();
  }
}
