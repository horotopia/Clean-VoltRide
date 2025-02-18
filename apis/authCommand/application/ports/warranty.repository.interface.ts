import { Warranty } from '../../domain/entities';

export interface WarrantyRepository {
  findByScooterId(scooterId: string): Promise<Warranty | null>;
  findActiveWarranties(): Promise<Warranty[]>;
  save(warranty: Warranty): Promise<void>;
  update(warranty: Warranty): Promise<void>;
}
