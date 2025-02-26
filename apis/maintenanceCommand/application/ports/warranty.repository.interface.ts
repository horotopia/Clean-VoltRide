import { Warranty } from "../../domain/Entities";

export interface WarrantyRepositoryInterface {
  findByScooterId(scooterId: string): Promise<Warranty | null>;
  findActiveWarranties(): Promise<Warranty[]>;
  save(warranty: Warranty): Promise<void>;
  update(warranty: Warranty): Promise<void>;
}
