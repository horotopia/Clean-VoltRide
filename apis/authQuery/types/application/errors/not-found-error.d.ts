import { DefaultApplicationError } from ".";
export declare class NotFoundError extends DefaultApplicationError {
    statusCode: number;
    name: string;
}
