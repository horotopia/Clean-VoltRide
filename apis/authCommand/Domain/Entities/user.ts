import { Role } from '../enums';
import { UserInterface } from '../interfaces';

export default class User implements UserInterface {

  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: Role;
  phone?: string;

  
  constructor(email: string, password: string, role: Role = Role.Customer) {
    this.email = email;
    this.password = password;
    this.role = role;
  }

  // ----- getters -----
  public getFirstName(): string | undefined {
    return this.firstName;
  }
  public getLastName(): string | undefined {
    return this.lastName;
  }
  public getEmail(): string {
    return this.email;
  }
  public getPassword(): string {
    return this.password;
  }
  public getRole(): Role {
    return this.role;
  }
  public getPhone(): string | undefined {
    return this.phone;
  }
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }  

  // ----- setters -----
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public setPassword(password: string): void {
    this.password = password;
  }
  public setRole(role: Role): void {
    this.role = role;
  }
  public setPhone(phone: string): void {
    this.phone = phone;
  }
}