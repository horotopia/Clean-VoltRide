import { MaintenanceRepositoryInterface } from "../../ports";
import { Maintenance } from "../../../domain/entities";
import { ReadMaintenanceDTO } from "../../dtos/maintenance";
import { BadRequestError, NotFoundError } from "../../../../authCommand/application/errors";


export class SearchMaintenanceUseCase {

  private maintenanceRepository: MaintenanceRepositoryInterface;

  constructor(maintenanceRepository: MaintenanceRepositoryInterface) {
    this.maintenanceRepository = maintenanceRepository;
  }

  async execute(dto: ReadMaintenanceDTO): Promise<Maintenance | Error> {
    if (!dto || !dto.id) {
      throw new BadRequestError();
    }

    const maintenance: Maintenance | null = await this.maintenanceRepository.searchById(dto.id);
    if (!maintenance) {
      throw new NotFoundError();
    }
    return maintenance;
  }
}