import { Reservation } from "../../domain/entities";

export interface ReservationRepositoryInterface {
  findByCustomerId(customerId: string): Promise<Reservation[]>;
  save(testRide: Reservation): Promise<void>;
}
