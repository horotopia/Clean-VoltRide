import { AuthServiceInterface } from '../../application/ports';
import { User } from '../../domain/entities';
export declare class TokenHelper implements AuthServiceInterface {
    private secret;
    constructor();
    generateToken(user: User): string;
    verifyToken(token: string): any;
}
