import { ReservationRepository } from '../../ports';
import { Reservation } from '../../../domain/entities';

export class ReservationUseCase {
  constructor(private ReservationRepo: ReservationRepository) {}

  async execute(customerId: string, scooterId: string, date: Date, duration: number, location: string) {
    const reservation = new Reservation(customerId, scooterId, date, duration, location);
    await this.ReservationRepo.save(reservation);
  }
}
