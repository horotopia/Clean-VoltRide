import { v4 as uuidv4 } from 'uuid';
import { WarrantyStatus } from '../enums';


export class Warranty {

  public id: string;
  public scooterId: string;  // Garantie liée à un scooter spécifique
  public coveredParts: string[];  // Liste des pièces couvertes (batterie, moteur, etc.)
  public startDate: Date;
  public endDate: Date;
  public status: WarrantyStatus;

  constructor(
    scooterId: string,  // Garantie liée à un scooter spécifique
    coveredParts: string[],  // Liste des pièces couvertes (batterie, moteur, etc.)
    startDate: Date,
    endDate: Date,
    status: WarrantyStatus = WarrantyStatus.ACTIVE,
    id: string = uuidv4(),
  ) {
    this.id = id;
    this.scooterId = scooterId;
    this.coveredParts = coveredParts;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
  }

  isValid(): boolean {
    return this.status === 'active' && new Date() <= this.endDate;
  }

  expireWarranty() {
    this.status = WarrantyStatus.EXPIRED;
  }

  deactivateWarranty() {
    this.status = WarrantyStatus.INACTIVE;
  }
}
