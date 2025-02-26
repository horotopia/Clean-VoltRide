import { Maintenance } from "../../domain/entities";

export interface MaintenanceRepositoryInterface {
  findByScooterId(scooterId: string): Promise<Maintenance[]>;
  findById(id: string): Promise<Maintenance>;
  save(maintenance: Maintenance): Promise<void>;
  searchByScooterId(scooterId: string): Promise<Maintenance[]>;
  searchById(id: string): Promise<Maintenance | null>;
  searchAll(): Promise<Maintenance[]>;
  update(maintenance: Maintenance): Promise<void>;
  delete(id: string): Promise<void>;
}
