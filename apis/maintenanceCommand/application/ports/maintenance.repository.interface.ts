import { Maintenance } from '../../domain/entities';

export interface MaintenanceRepositoryInterface {
  findByScooterId(scooterId: string): Promise<Maintenance[]>;
  findById(id: string): Promise<Maintenance>;
  save(maintenance: Maintenance): Promise<void>;
}
