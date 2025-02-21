import { StockOrder } from "../../domain/entities";

export interface StockOrderRepositoryInterface {
  findAll(): Promise<StockOrder[]>;
  findByPartName(partName: string): Promise<StockOrder[]>;
  save(order: StockOrder): Promise<void>;
}
