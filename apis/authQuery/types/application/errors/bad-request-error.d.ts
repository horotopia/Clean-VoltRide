import { DefaultApplicationError } from "./default-application-error";
export declare class BadRequestError extends DefaultApplicationError {
    name: string;
    statusCode: number;
}
