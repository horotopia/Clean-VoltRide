import { ScooterStatus } from '../enums';
import { v4 as uuidv4 } from 'uuid';
import { ScooterInterface } from '../interfaces';

export class Scooter implements ScooterInterface {

  public id: string;
  public model: string;
  public status: ScooterStatus;
  public lastMaintenanceDate: Date;
  public totalKilometers: number;
  public chargeCycles: number;

  constructor(
    model: string,
    lastMaintenanceDate: Date,
    totalKilometers: number,
    chargeCycles: number,
    status: ScooterStatus = ScooterStatus.AVAILABLE,
    id: string = uuidv4()
  ) {
    this.id = id;
    this.model = model;
    this.status = status;
    this.lastMaintenanceDate = lastMaintenanceDate;
    this.totalKilometers = totalKilometers;
    this.chargeCycles = chargeCycles;
  }

  needsMaintenance(): boolean {
    const futureDate = new Date(this.lastMaintenanceDate);
    futureDate.setMonth(futureDate.getMonth() + 6);

    const currentDate = new Date();

    return this.chargeCycles >= 50 || this.totalKilometers >= 5000 ||  futureDate < currentDate;
  }
}
