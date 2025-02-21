import { RentalRepository } from '../../ports';

export class CancelRental {
  constructor(private rentalRepo: RentalRepository) {}

  async execute(rentalId: string) {
    const rental = await this.rentalRepo.findById(rentalId);
    if (!rental) throw new Error('Location non trouvée');

    rental.cancelRental();
    await this.rentalRepo.update(rental);
  }
}
