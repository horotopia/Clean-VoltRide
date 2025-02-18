import { Reservation } from "../../domain/entities";

export interface ReservationRepository {
  findByCustomerId(customerId: string): Promise<Reservation[]>;
  save(testRide: Reservation): Promise<void>;
}
