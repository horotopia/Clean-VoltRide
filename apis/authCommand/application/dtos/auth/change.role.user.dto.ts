import { Role } from "../../../domain/enums";

export interface ChangeRoleUserDTO {
  userId: string;
  role: Role;
  token: string;
}