import { v4 as uuidv4 } from 'uuid';

export class Incident {

  public id: string;
  public ReservationId: string;
  public description: string;
  public reportedAt: Date;

  constructor(
    ReservationId: string,
    description: string,
    reportedAt: Date,
    id: string = uuidv4(),
  ) {
    this.id = id;
    this.ReservationId = ReservationId;
    this.description = description;
    this.reportedAt = reportedAt;
  }
}
