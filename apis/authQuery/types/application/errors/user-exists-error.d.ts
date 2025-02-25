import { DefaultApplicationError } from ".";
export declare class UserExistsError extends DefaultApplicationError {
    statusCode: number;
    name: string;
}
