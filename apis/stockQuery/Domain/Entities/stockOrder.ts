import { v4 as uuidv4 } from 'uuid';
import { StockOrderStatus } from '../enums';
import { StockOrderInterface } from '../interfaces';

export class StockOrder implements StockOrderInterface {

  public id: string;
  public partnerName: string;
  public supplier: string;
  public quantity: number;
  public unitPrice: number;
  public orderDate: Date;
  public deliveryDate?: Date;
  public status: StockOrderStatus;

  constructor(
    partnerName: string,
    supplier: string,
    quantity: number,
    unitPrice: number,
    orderDate: Date,
    deliveryDate?: Date,
    status: StockOrderStatus = StockOrderStatus.PENDING,
    id: string = uuidv4(),
  ) {
    this.id = id;
    this.partnerName = partnerName;
    this.supplier = supplier;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.orderDate = orderDate;
    this.deliveryDate = deliveryDate;
    this.status = status;
  }

  getTotalAmount(): number {
    return this.quantity * this.unitPrice;
  }
}
