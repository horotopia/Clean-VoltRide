import { StockRepository } from '../../ports';

export class UpdateStockAfterMaintenance {
  constructor(private stockRepo: StockRepository) {}

  async execute(partName: string, quantityUsed: number): Promise<void> {
    const part = await this.stockRepo.findByName(partName);
    if (!part) throw new Error(`Pièce ${partName} introuvable dans le stock`);

    part.quantity -= quantityUsed;
    await this.stockRepo.update(part);
  }
}
