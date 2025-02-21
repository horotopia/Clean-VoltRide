import { MaintenanceRepository } from '../../ports';
import { Maintenance } from '../../../domain/entities';
import { ScooterRepository } from '../../ports';
import { Scooter } from '../../../domain/entities';
import { MaintenanceType } from '../../../domain/enums';

export class PlanifierMaintenanceUseCase {
  constructor(private scooterRepo: ScooterRepository, private maintenanceRepo: MaintenanceRepository) {}

  async execute(scooterId: string): Promise<void> {
    const scooter = await this.scooterRepo.findById(scooterId);
    if (!scooter) throw new Error("Scooter introuvable");

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
        maintenanceType,
        new Date(),
        details,
        0 // Coût inconnu pour l’instant
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
