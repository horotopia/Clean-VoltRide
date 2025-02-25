import { MaintenanceType } from '../../../domain/enums';

export interface CreateMaintenanceDTO {
  scooterId: string;
  technicianId: string;
  type: MaintenanceType;
  date: Date;
  details: string;
  cost: number;
  token: string;
}
