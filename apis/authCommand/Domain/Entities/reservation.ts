import { v4 as uuidv4 } from 'uuid';

export class Reservation {

  public id: string;
  public customerId: string;
  public scooterId: string;
  public date: Date;
  public duration: number;
  public location: string;

  constructor(
    customerId: string,
    scooterId: string,
    date: Date,
    duration: number,
    location: string,
    id: string = uuidv4()
  ) {
    this.id = id;
    this.customerId = customerId;
    this.scooterId = scooterId;
    this.date = date;
    this.duration = duration;
    this.location = location;
  }
}
