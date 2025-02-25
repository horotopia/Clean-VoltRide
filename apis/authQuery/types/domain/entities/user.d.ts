import { Role } from '../enums';
import { UserInterface } from '../interfaces';
export declare class User implements UserInterface {
    id: string;
    email: string;
    password: string;
    role: Role;
    firstName?: string;
    lastName?: string;
    phone?: string;
    constructor(email: string, password: string, role?: Role, id?: string);
    isValidPassword(password: string, hashedPassword: string): Promise<boolean>;
}
