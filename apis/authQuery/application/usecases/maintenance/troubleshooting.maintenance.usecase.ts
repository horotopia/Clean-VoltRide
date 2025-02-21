import { Incident } from "../../../domain/entities";
import { IncidentRepository, ScooterRepository } from "../../ports";
import { ScooterStatus } from "../../../domain/enums";


export class ReportIncident {
  constructor(private incidentRepo: IncidentRepository, private scooterRepo: ScooterRepository) {}

  async execute(scooterId: string, description: string): Promise<void> {
    const scooter = await this.scooterRepo.findById(scooterId);
    if (!scooter) throw new Error("Scooter introuvable");

    const incident = new Incident(scooterId, description, new Date());
    await this.incidentRepo.save(incident);

    // Met le scooter en état "en maintenance"
    scooter.status = ScooterStatus.MAINTENANCE;
    await this.scooterRepo.update(scooter);
  }
}
