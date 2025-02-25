import { Maintenance } from '../../../domain/entities';
import { MaintenanceRepository } from '../../ports';

export class SearchMaintenanceHistory {
  constructor(private maintenanceRepo: MaintenanceRepository) {}

  async execute(scooterId: string): Promise<Maintenance[]> {
    return await this.maintenanceRepo.findByScooterId(scooterId);
  }
}
