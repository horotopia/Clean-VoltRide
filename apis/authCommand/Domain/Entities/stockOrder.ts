import { v4 as uuidv4 } from 'uuid';

export class StockOrder {

  public id: string;
  public partName: string;
  public supplier: string;
  public quantity: number;
  public unitPrice: number;
  public orderDate: Date;
  public deliveryDate?: Date;

  constructor(
    partName: string,
    supplier: string,
    quantity: number,
    unitPrice: number,
    orderDate: Date,
    deliveryDate?: Date,
    id: string = uuidv4(),
  ) {
    this.id = id;
    this.partName = partName;
    this.supplier = supplier;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.orderDate = orderDate;
    this.deliveryDate = deliveryDate;
  }

  getTotalCost(): number {
    return this.quantity * this.unitPrice;
  }
}
