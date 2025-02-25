import { ScooterStatus } from "../enums";
export interface ScooterInterface {
    id: string;
    model: string;
    status: ScooterStatus;
    lastMaintenanceDate: Date;
    totalKilometers: number;
    chargeCycles: number;
}
