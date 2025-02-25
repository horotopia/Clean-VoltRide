import { DefaultApplicationError } from ".";

export class InternalServerError extends DefaultApplicationError {
  name = "InternalServerError";
  statusCode = 500;
}
