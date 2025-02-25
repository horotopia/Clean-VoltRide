import { DefaultApplicationError } from ".";
export declare class RequestValidationError extends DefaultApplicationError {
    statusCode: number;
    name: string;
}
