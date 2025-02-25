import { DefaultApplicationError } from ".";
export declare class SanitizerError extends DefaultApplicationError {
    name: string;
    statusCode: number;
}
