import { RentalStatus } from "../enums";

export interface RentalInterface {
  id: string;
  scooterId: string;
  customerId: string;
  startDate: Date;
  endDate?: Date | undefined;
  status: RentalStatus;
  totalPrice?: number;
}