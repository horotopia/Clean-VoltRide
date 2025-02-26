import { Incident, Scooter, Maintenance } from "../../../domain/entities";
import {
  IncidentRepositoryInterface,
  MaintenanceRepositoryInterface,
  ScooterRepositoryInterface,
} from "../../ports";
import { BadRequestError, NotFoundError } from "../../errors";
import { ReadallMaintenanceDTO } from "../../dtos/maintenance";

export class ReportIncident {
  private incidentRepo: IncidentRepositoryInterface;
  private scooterRepo: ScooterRepositoryInterface;
  private maintenanceRepo: MaintenanceRepositoryInterface;

  constructor(
    incidentRepo: IncidentRepositoryInterface,
    scooterRepo: ScooterRepositoryInterface,
    maintenanceRepo: MaintenanceRepositoryInterface,
  ) {
    this.incidentRepo = incidentRepo;
    this.scooterRepo = scooterRepo;
    this.maintenanceRepo = maintenanceRepo;
  }

  async execute(dto: ReadallMaintenanceDTO): Promise<
    | {
        scooter: Scooter;
        incidents: Incident[];
        warrantyMaintenances: Maintenance[];
        nonWarrantyMaintenances: Maintenance[];
        immobilizationTime: number;
      }
    | Error
  > {
    if (!dto || !dto.scooterId) throw new BadRequestError("Données manquantes");
    const scooter = await this.scooterRepo.findById(dto.scooterId);
    if (!scooter) throw new NotFoundError("Scooter introuvable");

    // lire les incidents
    const incidents = await this.incidentRepo.searchByScooterId(scooter.id);

    const maintenances = await this.maintenanceRepo.findByScooterId(scooter.id);
    // lire les maintenances garanties
    const warrantyMaintenances = maintenances.filter((m) => m.warranty);
    // lire les maintenances non garanties
    const nonWarrantyMaintenances = maintenances.filter((m) => !m.warranty);
    // obtenir le temps d'immobilisation
    const immobilizationTime = incidents.reduce((acc: number, i: Incident) => {
      return acc + i.timeToResolve();
    }, 0);

    return {
      scooter,
      incidents,
      warrantyMaintenances,
      nonWarrantyMaintenances,
      immobilizationTime,
    };
  }
}
