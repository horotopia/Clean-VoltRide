import { DefaultApplicationError } from ".";
export declare class EmailValidationError extends DefaultApplicationError {
    statusCode: number;
    name: string;
}
