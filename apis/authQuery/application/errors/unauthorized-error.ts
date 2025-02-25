import { DefaultApplicationError } from ".";

export class UnauthorizedError extends DefaultApplicationError {
  name = "UnauthorizedError";
  statusCode = 401;
}
