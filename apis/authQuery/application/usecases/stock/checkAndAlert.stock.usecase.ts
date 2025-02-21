import { StockRepository, NotificationService } from "../../ports";

export class CheckAndAlertLowStock {
  constructor(private stockRepo: StockRepository, private notificationService: NotificationService) {}

  async execute(partName: string): Promise<void> {
    const part = await this.stockRepo.findByName(partName);
    if (!part) throw new Error(`Pièce ${partName} introuvable dans le stock`);

    if (part.quantity <= part.minThreshold) {
      const message = `⚠️ Stock critique : ${part.quantity} unités restantes de ${partName}. Réapprovisionnement nécessaire !`;
      await this.notificationService.sendNotification("gestionnaire", message);
    }
  }
}
