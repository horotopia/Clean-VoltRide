import { Maintenance } from '../../../domain/entities';
import { MaintenanceRepositoryInterface } from '../../ports';

export class SearchMaintenanceHistory {

  private maintenanceRepo: MaintenanceRepositoryInterface;

  constructor(maintenanceRepo: MaintenanceRepositoryInterface) {
    this.maintenanceRepo = maintenanceRepo;
  }

  async execute(scooterId: string): Promise<Maintenance[]> {
    const maintenances = await this.maintenanceRepo.searchByScooterId(scooterId);
    return maintenances;
  }
}
