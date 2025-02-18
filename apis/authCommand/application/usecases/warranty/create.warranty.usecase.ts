import { Warranty } from '../../../domain/entities';
import { WarrantyStatus } from '../../../domain/enums';
import { WarrantyRepository } from '../../ports';

class CreateWarranty {
  constructor(private warrantyRepo: WarrantyRepository) {}

  async execute(scooterId: string, coveredParts: string[], durationMonths: number) {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(startDate.getMonth() + durationMonths);

    const warranty = new Warranty(scooterId, coveredParts, startDate, endDate, WarrantyStatus.ACTIVE);
    await this.warrantyRepo.save(warranty);
  }
}
