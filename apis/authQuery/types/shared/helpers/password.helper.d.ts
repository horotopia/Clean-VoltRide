import { PasswordServiceInterface } from "../../application/ports/password.service.interface";
export declare class PasswordHelper implements PasswordServiceInterface {
    private saltRounds;
    constructor(saltRounds?: number);
    hash(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
}
