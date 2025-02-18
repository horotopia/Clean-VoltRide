import { Maintenance } from '../../domain/entities';

export interface MaintenanceRepository {
  findByScooterId(scooterId: string): Promise<Maintenance[]>;
  save(maintenance: Maintenance): Promise<void>;
}
