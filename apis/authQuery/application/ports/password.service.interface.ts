import { User } from "../../domain/entities/";

export interface PasswordServiceInterface {
  hash(password: string): Promise<string>;
  compare(password: string, hash: string): Promise<boolean>;
}