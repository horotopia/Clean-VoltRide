import { WarrantyStatus } from "../enums";

export interface WarrantyInterface {
  id: string;
  scooterId: string;  // Garantie liée à un scooter spécifique
  coveredParts: string[];  // Liste des pièces couvertes (batterie, moteur, etc.)
  startDate: Date;
  endDate: Date;
  status: WarrantyStatus;
}