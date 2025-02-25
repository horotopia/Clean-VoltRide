import { User } from "../../domain/entities";
export interface AuthServiceInterface {
    generateToken(user: User): string;
    verifyToken(token: string): User;
}
