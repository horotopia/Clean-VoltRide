import { MongooseService } from "./mongoose";
import { Sequelize } from "sequelize";

export interface Adapter<DBService, DBName> {
  get(): Promise<DBService>;
  connect(): Promise<DBName>;
  disconnect(): Promise<void>;
}