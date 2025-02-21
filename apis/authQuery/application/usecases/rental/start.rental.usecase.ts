import { RentalRepository } from '../../ports';
import { Rental } from '../../../domain/entities';
import { RentalStatus } from '../../../domain/enums';

export class StartRental {
  constructor(private rentalRepo: RentalRepository) {}

  async execute(scooterId: string, customerId: string) {
    const rental = new Rental(scooterId, customerId, new Date(), undefined, RentalStatus.IN_PROGRESS);
    await this.rentalRepo.save(rental);
  }
}
