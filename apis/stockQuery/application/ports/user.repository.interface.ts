import { User } from '../../domain/entities';

export interface UserRepositoryInterface {
  
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<void>;
}
