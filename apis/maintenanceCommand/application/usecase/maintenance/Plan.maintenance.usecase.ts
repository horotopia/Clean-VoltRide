import { Maintenance, Scooter, Warranty } from '../../../domain/entities';
import { MaintenanceType } from '../../../domain/enums';
import { BadRequestError } from '../../../../authCommand/application/errors';
import { MaintenanceRepositoryInterface, ScooterRepositoryInterface } from '../../ports';
import { CreateMaintenanceDTO } from '../../dtos/maintenance';

export class PlanifierMaintenanceUseCase {

  private scooterRepo: ScooterRepositoryInterface;
  private maintenanceRepo: MaintenanceRepositoryInterface;

  constructor(scooterRepo: ScooterRepositoryInterface, maintenanceRepo: MaintenanceRepositoryInterface) {
    this.scooterRepo = scooterRepo;
    this.maintenanceRepo = maintenanceRepo;
  }

  async execute(dto: CreateMaintenanceDTO): Promise<void | Error> {
    if (!dto || !dto.scooterId || !dto.technicianId) {
      throw new BadRequestError();
    }
    const scooter = await this.scooterRepo.findById(dto.scooterId);
    if (!scooter) throw new BadRequestError();

    let needsMaintenance = false;
    let maintenanceType = MaintenanceType.PREVENT;
    let details = "";

    // Règles de maintenance en fonction du modèle
    if (scooter.model === "City 45" && scooter.chargeCycles >= 50) {
      needsMaintenance = true;
      details = "Vérification de la batterie après 50 cycles de charge.";
    }
    if (scooter.model === "Pro 60" && this.isSixMonthsSinceLastMaintenance(scooter)) {
      needsMaintenance = true;
      details = "Révision technique après 6 mois.";
    }

    if (needsMaintenance) {
      const maintenance = new Maintenance(
        scooter.id,
        dto.technicianId,
        maintenanceType,
        true,
        new Date(),
        details,
        0,
      );
      await this.maintenanceRepo.save(maintenance);
    }
  }

  private isSixMonthsSinceLastMaintenance(scooter: Scooter): boolean {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    return scooter.lastMaintenanceDate <= sixMonthsAgo;
  }
}
