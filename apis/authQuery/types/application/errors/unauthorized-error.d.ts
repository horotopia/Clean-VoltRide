import { DefaultApplicationError } from ".";
export declare class UnauthorizedError extends DefaultApplicationError {
    name: string;
    statusCode: number;
}
