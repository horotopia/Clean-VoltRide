import { IncidentStatus } from "../enums";
export interface IncidentInterface {
    id: string;
    scooterId: string;
    customerId: string;
    ReservationId: string;
    description: string;
    location: string;
    severity: number;
    status: IncidentStatus;
    reportedAt: Date;
    resolvedAt: Date | null;
}
