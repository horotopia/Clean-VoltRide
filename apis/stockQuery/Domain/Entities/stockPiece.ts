import { v4 as uuidv4 } from 'uuid';
import { StockPieceInterface } from '../interfaces';

export class StockPiece implements StockPieceInterface {

  public id: string;
  public name: string;
  public category: string;
  public quantity: number;
  public minThreshold: number;
  public supplier: string;
  public unitPrice: number;

  constructor(
    name: string,
    quantity: number,
    minThreshold: number,
    supplier: string,
    unitPrice: number,
    id: string = uuidv4(),
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.minThreshold = minThreshold;
    this.supplier = supplier;
    this.unitPrice = unitPrice;
  }

  needsRestocking(): boolean {
    return this.quantity <= this.minThreshold;
  }
}
