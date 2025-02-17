import { Role } from "../../domain/enums"

export interface RegisterUserDTO {
  email: string;
  password: string;
  role?: Role;
}