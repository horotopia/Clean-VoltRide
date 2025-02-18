import { Scooter } from "../../../domain/entities";
import { ScooterRepository, NotificationService } from "../../ports";

export class SendMaintenanceAlert {
  constructor(private scooterRepo: ScooterRepository, private notificationService: NotificationService) {}

  async execute(scooterId: string): Promise<void> {
    const scooter = await this.scooterRepo.findById(scooterId);
    if (!scooter) throw new Error("Scooter introuvable");

    let message = "";

    if (scooter.model === "City 45" && scooter.chargeCycles >= 50) {
      message = `🚨 Maintenance requise pour le scooter ${scooterId} : Vérification de la batterie après 50 cycles.`;
    }
    if (scooter.model === "Pro 60" && this.isSixMonthsSinceLastMaintenance(scooter)) {
      message = `🚨 Maintenance requise pour le scooter ${scooterId} : Révision technique après 6 mois.`;
    }

    if (message) {
      await this.notificationService.sendNotification(scooterId, message);
    }
  }

  private isSixMonthsSinceLastMaintenance(scooter: Scooter): boolean {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    return scooter.lastMaintenanceDate <= sixMonthsAgo;
  }
}
