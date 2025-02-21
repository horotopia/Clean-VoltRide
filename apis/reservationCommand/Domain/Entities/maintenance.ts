import { MaintenanceType } from '../enums';
import { v4 as uuidv4 } from 'uuid';
import { MaintenanceInterface } from '../interfaces';

export class Maintenance implements MaintenanceInterface {

  public id: string;
  public scooterId: string;
  public technicianId: string;
  public type: MaintenanceType;
  public date: Date;
  public details: string;
  public cost: number;

  constructor(
    scooterId: string,
    type: MaintenanceType,
    date: Date,
    details: string,
    cost: number,
    id: string = uuidv4(),
  ) {
    this.id = id;
    this.scooterId = scooterId;
    this.type = type;
    this.date = date;
    this.details = details;
    this.cost = cost;
  }
}
