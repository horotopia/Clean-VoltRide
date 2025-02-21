import { Rental } from '../../domain/entities';

export interface RentalRepositoryInterface {
  findById(id: string): Promise<Rental | null>;
  findByCustomerId(customerId: string): Promise<Rental[]>;
  findActiveRentals(): Promise<Rental[]>;
  save(rental: Rental): Promise<void>;
  update(rental: Rental): Promise<void>;
}
