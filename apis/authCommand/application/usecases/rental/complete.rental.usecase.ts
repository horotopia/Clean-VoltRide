import { RentalRepository } from '../../ports';

export class CompleteRental {
  constructor(private rentalRepo: RentalRepository) {}

  async execute(rentalId: string, totalPrice: number) {
    const rental = await this.rentalRepo.findById(rentalId);
    if (!rental) throw new Error('Location non trouvée');

    rental.completeRental(new Date(), totalPrice);
    await this.rentalRepo.update(rental);
  }
}
