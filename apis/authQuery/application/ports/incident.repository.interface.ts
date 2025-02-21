import { Incident } from '../../domain/entities';

export interface IncidentRepositoryInterface {
  findByTestRideId(testRideId: string): Promise<Incident[]>;
  save(incident: Incident): Promise<void>;
}