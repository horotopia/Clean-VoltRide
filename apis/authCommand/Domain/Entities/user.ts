import { Role } from '../enums';
import { UserInterface } from '../interfaces';

export class User implements UserInterface {

  public id: string;
  public email: string;
  public password: string;
  public role: Role;
  
  constructor(id: string,email: string, password: string, role: Role = Role.Customer) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  isValidPassword(password: string, hashedPassword: string): boolean {
    return PasswordHelper.compare(password, hashedPassword);
  }
}