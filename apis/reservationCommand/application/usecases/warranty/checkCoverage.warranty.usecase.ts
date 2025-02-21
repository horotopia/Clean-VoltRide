import { WarrantyRepository } from '../../ports';

export class CheckWarrantyCoverage {
  constructor(private warrantyRepo: WarrantyRepository) {}

  async execute(scooterId: string, part: string): Promise<boolean> {
    const warranty = await this.warrantyRepo.findByScooterId(scooterId);
    if (!warranty || !warranty.isValid()) return false;

    return warranty.coveredParts.includes(part);
  }
}
