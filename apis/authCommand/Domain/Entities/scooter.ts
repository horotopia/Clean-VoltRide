import { ScooterStatus } from '../enums';
import { v4 as uuidv4 } from 'uuid';

export class Scooter {

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
    status: ScooterStatus = ScooterStatus.Available,
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
    // Vérifie si une maintenance est nécessaire
    return this.chargeCycles >= 50 || this.totalKilometers >= 5000;
  }
}
