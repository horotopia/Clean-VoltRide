import { StockOrder } from '../../../domain/entities';
import { StockOrderRepository } from '../../ports';

export class CreateStockOrder {
  constructor(private stockOrderRepo: StockOrderRepository) {}

  async execute(partName: string, supplier: string, quantity: number, unitPrice: number) {
    const order = new StockOrder(partName, supplier, quantity, unitPrice, new Date());
    await this.stockOrderRepo.save(order);
  }
}
