export declare class Bcrypt {
    private saltRounds;
    constructor(saltRounds?: number);
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
}
