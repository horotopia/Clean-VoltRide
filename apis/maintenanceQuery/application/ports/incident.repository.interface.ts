import { Incident } from '../../domain/entities';

export interface IncidentRepositoryInterface {
  searchByScooterId(scooterId: string): Promise<Incident[]>;
  findByTestRideId(testRideId: string): Promise<Incident[]>;
  save(incident: Incident): Promise<void>;
}