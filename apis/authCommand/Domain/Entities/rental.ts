import { RentalStatus } from '../enums';
import { v4 as uuidv4 } from 'uuid';

export class Rental {

  public id: string;
  public scooterId: string;
  public customerId: string;
  public startDate: Date;
  public endDate?: Date;  // Peut être undefined si la location est en cours
  public status: RentalStatus = RentalStatus.IN_PROGRESS;
  public totalPrice?: number;

  constructor(
    scooterId: string,
    customerId: string,
    startDate: Date,
    status: RentalStatus = RentalStatus.IN_PROGRESS,
    id: string = uuidv4(),
    endDate?: Date,  // Peut être undefined si la location est en cours
    totalPrice?: number
  ) {
    this.id = id;
    this.scooterId = scooterId;
    this.customerId = customerId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    this.totalPrice = totalPrice;
  }

  completeRental(endDate: Date, totalPrice: number) {
    this.endDate = endDate;
    this.totalPrice = totalPrice;
    this.status = RentalStatus.COMPLETED;
  }

  cancelRental() {
    this.status = RentalStatus.CANCELLED;
  }
}
