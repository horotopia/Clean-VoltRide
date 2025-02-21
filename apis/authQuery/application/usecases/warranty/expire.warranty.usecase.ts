import { WarrantyRepository } from '../../ports';

export class ExpireWarranties {
  constructor(private warrantyRepo: WarrantyRepository) {}

  async execute() {
    const warranties = await this.warrantyRepo.findActiveWarranties();
    for (const warranty of warranties) {
      if (!warranty.isValid()) {
        warranty.expireWarranty();
        await this.warrantyRepo.update(warranty);
      }
    }
  }
}
