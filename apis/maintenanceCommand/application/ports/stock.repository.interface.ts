import { StockPiece } from "../../domain/Entities";

export interface StockRepositoryInterface {
  findAll(): Promise<StockPiece[]>;
  findById(id: string): Promise<StockPiece | null>;
  findByName(name: string): Promise<StockPiece | null>;
  save(stockPiece: StockPiece): Promise<void>;
  update(stockPiece: StockPiece): Promise<void>;
}
