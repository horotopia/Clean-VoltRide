import { Model } from "mongoose";
import { UserRepositoryInterface } from "../../../application/ports";
import { User } from "../../../domain/entities";
import { MongooseService } from "../../databases";
export declare class UserRepository implements UserRepositoryInterface {
    readonly mongooseService: MongooseService;
    readonly model: Model<User>;
    constructor(mongooseService: MongooseService);
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
}
