import { DefaultApplicationError } from ".";
export declare class RepositoryError extends DefaultApplicationError {
    name: string;
    statusCode: number;
}
