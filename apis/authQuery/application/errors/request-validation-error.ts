import { DefaultApplicationError } from ".";

export class RequestValidationError extends DefaultApplicationError {
  statusCode = 400;
  name = "RequestValidationError";
}
