import { User } from "../../domain/entities";
export interface UserRepositoryInterface {
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
}
