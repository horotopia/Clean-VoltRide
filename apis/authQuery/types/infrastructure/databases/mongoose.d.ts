import { Mongoose } from "mongoose";
import { UserRepository } from "../repositories/mongoose";
import { Adapter } from "./adapter";
export declare class MongooseService implements Adapter<MongooseService, Mongoose> {
    private static instance?;
    readonly mongoose: Mongoose;
    readonly userRepository: UserRepository;
    private constructor();
    get(): Promise<MongooseService>;
    connect(): Promise<typeof import("mongoose")>;
    static get(): Promise<MongooseService>;
    private static connect;
    disconnect(): Promise<void>;
}
