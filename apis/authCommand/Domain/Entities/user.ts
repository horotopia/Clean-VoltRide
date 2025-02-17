import { Role } from '../enums';
import { UserInterface } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import { PasswordHelper } from '../../shared/helpers/password.helper';

export class User implements UserInterface {

  public id: string;
  public email: string;
  public password: string;
  public role: Role;
  
  constructor(email: string, password: string, role: Role = Role.Customer , id: string = uuidv4()) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  isValidPassword(password: string, hashedPassword: string): Promise<boolean> {
    const passwordHelper = new PasswordHelper();
    return passwordHelper.compare(password, hashedPassword);
  }
}