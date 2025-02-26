import { Scooter } from "../../../domain/Entities";
import {
  ScooterRepositoryInterface,
  NotificationServiceInterface,
} from "../../ports";

export class NotificationMaintenanceUseCase {
  private scooterRepo: ScooterRepositoryInterface;
  private notificationService: NotificationServiceInterface;

  constructor(
    scooterRepo: ScooterRepositoryInterface,
    notificationService: NotificationServiceInterface,
  ) {
    this.scooterRepo = scooterRepo;
    this.notificationService = notificationService;
  }

  async execute(scooterId: string): Promise<void> {
    const scooter = await this.scooterRepo.findById(scooterId);
    if (!scooter) throw new Error("Scooter introuvable");

    let message = "";

    if (scooter.model === "City 45" && scooter.chargeCycles >= 50) {
      message = `🚨 Maintenance requise pour le scooter ${scooterId} : Vérification de la batterie après 50 cycles.`;
    }
    if (
      scooter.model === "Pro 60" &&
      this.isSixMonthsSinceLastMaintenance(scooter)
    ) {
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
