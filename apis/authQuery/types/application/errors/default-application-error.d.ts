import { ResponseModel } from "../ports/responses/response.interface";
export type ErrorParams = {
    name?: string;
    message?: string;
    statusCode?: number;
    messages?: string[];
    stack?: Error["stack"];
};
export type ErrorResponseModel = Omit<ResponseModel<ErrorParams>, "body">;
export declare class DefaultApplicationError extends Error implements ErrorResponseModel {
    statusCode: number;
    messages: string[];
    constructor(message?: string);
}
