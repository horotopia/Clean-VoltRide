import { v4 as uuidv4 } from 'uuid';
import { IncidentStatus } from '../enums';
import { IncidentInterface } from '../interfaces';

export class Incident implements IncidentInterface {

  public id: string;
  public scooterId: string;
  public customerId: string;
  public ReservationId: string;
  public description: string;
  public location: string;
  public severity: number;
  public status: IncidentStatus;
  public reportedAt: Date;
  public resolvedAt: Date | null;

  constructor(
    scooterId: string,
    customerId: string,
    ReservationId: string,
    description: string,
    location: string,
    severity: number,
    status: IncidentStatus.OPEN,
    reportedAt: Date,
    resolvedAt: Date | null,
    id: string = uuidv4(),
  ) {
    this.id = id;
    this.scooterId = scooterId;
    this.customerId = customerId;
    this.ReservationId = ReservationId;
    this.description = description;
    this.location = location;
    this.severity = severity;
    this.status = status;
    this.reportedAt = reportedAt;
    this.resolvedAt = resolvedAt;
  }

  public timeToResolve(): number {
    if (this.resolvedAt) {
      return this.resolvedAt.getTime() - this.reportedAt.getTime();
    }
    return new Date().getTime() - this.reportedAt.getTime();
  }
}
