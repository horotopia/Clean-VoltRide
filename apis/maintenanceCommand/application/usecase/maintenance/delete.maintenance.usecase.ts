import { BadRequestError, NotFoundError } from "../../../../authCommand/application/errors";
import { MaintenanceRepositoryInterface } from "../../ports";
import { DeleteMaintenanceDTO } from "../../dtos/maintenance";


export class DeleteMaintenanceUseCase {

  private maintenanceRepo: MaintenanceRepositoryInterface;

  constructor(maintenanceRepo: MaintenanceRepositoryInterface) {
    this.maintenanceRepo = maintenanceRepo;
  }

  async execute(dto: DeleteMaintenanceDTO): Promise<void> {
    if (!dto.id) {
      throw new BadRequestError();
    }
    const maintenance = await this.maintenanceRepo.searchById(dto.id);
    if (!maintenance) {
      throw new NotFoundError();
    }
    await this.maintenanceRepo.delete(maintenance.id);
  }
}