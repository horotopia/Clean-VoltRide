import { MaintenanceType } from "../enums";

export interface MaintenanceInterface {
  id: string;
  scooterId: string;
  technicianId: string;
  type: MaintenanceType;
  date: Date;
  details: string;
  cost: number;
}