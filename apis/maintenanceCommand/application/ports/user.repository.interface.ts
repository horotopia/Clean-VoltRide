import { User } from "../../domain/Entities";

export interface UserRepositoryInterface {
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<void>;
}
