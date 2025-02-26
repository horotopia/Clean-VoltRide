import { Scooter } from "../../domain/Entities";

export interface ScooterRepositoryInterface {
  findById(id: string): Promise<Scooter | null>;
  findAll(): Promise<Scooter[]>;
  save(scooter: Scooter): Promise<void>;
  update(scooter: Scooter): Promise<void>;
  delete(id: string): Promise<void>;
}
