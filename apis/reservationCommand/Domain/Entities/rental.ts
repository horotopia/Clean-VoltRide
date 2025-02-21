import { RentalStatus } from '../enums';
import { v4 as uuidv4 } from 'uuid';
import { RentalInterface } from '../interfaces';

export class Rental implements RentalInterface {

  public id: string;
  public scooterId: string;
  public customerId: string;
  public startDate: Date;
  public endDate?: Date | undefined;
  public status: RentalStatus;
  public totalPrice?: number;

  constructor(
    scooterId: string,
    customerId: string,
    startDate: Date,
    status: RentalStatus = RentalStatus.IN_PROGRESS,
    id: string = uuidv4(),
    endDate?: Date|undefined,
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
