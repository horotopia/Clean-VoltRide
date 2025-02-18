interface StockOrderRepository {
  findAll(): Promise<StockOrder[]>;
  findByPartName(partName: string): Promise<StockOrder[]>;
  save(order: StockOrder): Promise<void>;
}
