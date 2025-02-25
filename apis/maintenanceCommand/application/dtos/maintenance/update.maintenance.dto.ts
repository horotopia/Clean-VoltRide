import { MaintenanceType } from '../../../domain/enums';

export interface UpdateMaintenanceDTO {
  id: string;
  token: string;
  scooterId?: string;
  technicianId?: string;
  type?: MaintenanceType;
  date?: Date;
  details?: string;
  cost?: number;
}