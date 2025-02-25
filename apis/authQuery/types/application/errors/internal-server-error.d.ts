import { DefaultApplicationError } from ".";
export declare class InternalServerError extends DefaultApplicationError {
    name: string;
    statusCode: number;
}
