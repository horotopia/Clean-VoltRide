import { Incident, Maintenance } from "../../../domain/entities";
import { ScooterRepositoryInterface, IncidentRepositoryInterface, MaintenanceRepositoryInterface } from "../../ports";
import { ScooterStatus } from "../../../domain/enums";
import { BadRequestError } from "../../../../authCommand/application/errors";
import { ReadMaintenanceDTO } from "../../dtos/maintenance";


export class ReportIncident {

  private scooterRepo: ScooterRepositoryInterface;
  private incidentRepo: IncidentRepositoryInterface;
  private maintenanceRepo: MaintenanceRepositoryInterface;

  constructor(scooterRepo: ScooterRepositoryInterface, incidentRepo: IncidentRepositoryInterface, maintenanceRepo: MaintenanceRepositoryInterface) {
    this.scooterRepo = scooterRepo;
    this.incidentRepo = incidentRepo;
    this.maintenanceRepo = maintenanceRepo;
  }

  async execute(dto: ReadMaintenanceDTO): Promise<{ incidents: Incident[], warrantyMaintenances: Maintenance[], noWarrantyMaintenances: Maintenance[], immobilisationTime: number } | Error> {
    if (!dto.scooterId) {
      throw new BadRequestError();
    }
    // Vérifie que le scooter existe
    const scooter = await this.scooterRepo.findById(dto.scooterId);
    if (!scooter) {
      throw new BadRequestError();
    }

    // lire les incidents du scoooter
    const incidents = await this.incidentRepo.searchByScooterId(scooter.id);

    // lire les maintenances du scooter
    const maintenances = await this.maintenanceRepo.searchByScooterId(scooter.id);
    
    // lire les réparation sous garantie du scooter
    const warrantyMaintenances = maintenances.filter(maintenance => maintenance.warranty === true);

    // lire les réparation hors garantie du scooter
    const noWarrantyMaintenances = maintenances.filter(maintenance => maintenance.warranty === false);
    
    // lire le temps d'immobilisation du scooter
    const immobilisationTime = incidents.reduce((acc, incident) => acc + incident.timeToResolve(), 0);

    // Met le scooter en état "en maintenance"
    scooter.status = ScooterStatus.MAINTENANCE;
    await this.scooterRepo.update(scooter);

    // Sortie de la fonction
    return { incidents, warrantyMaintenances, noWarrantyMaintenances, immobilisationTime };
  }
}
