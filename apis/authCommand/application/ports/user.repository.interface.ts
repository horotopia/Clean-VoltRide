import { User } from '../../domain/entities';

export interface UserRepositoryInterface {
  
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  create(user: User): Promise<User | null>;
  update(user: User): Promise<User | null>;
  updateRole(id: string, role: string): Promise<User | null>;
  updatePassword(id: string, password: string): Promise<User | null>;
  delete(id: string): Promise<void>;
}
