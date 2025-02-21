import { WarrantyRepository } from '../../ports';


export class CheckIncidentWarranty {
  constructor(private warrantyRepo: WarrantyRepository) {}

  async execute(scooterId: string): Promise<boolean> {
    const warranty = await this.warrantyRepo.findByScooterId(scooterId);
    return warranty ? warranty.isValid() : false;
  }
}
