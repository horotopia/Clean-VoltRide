import { MaintenanceType } from "../../../domain/enums";

export interface UpdateMaintenanceDTO {
  scooterId?: string;
  technicianId?: string;
  type?: MaintenanceType;
  date?: Date;
  details?: string;
  cost?: number;
}
