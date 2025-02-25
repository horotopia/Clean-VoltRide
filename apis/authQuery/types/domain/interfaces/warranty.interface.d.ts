import { WarrantyStatus } from "../enums";
export interface WarrantyInterface {
    id: string;
    scooterId: string;
    coveredParts: string[];
    startDate: Date;
    endDate: Date;
    status: WarrantyStatus;
}
