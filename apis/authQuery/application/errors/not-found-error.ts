import { DefaultApplicationError } from ".";

export class NotFoundError extends DefaultApplicationError {
  statusCode = 404;
  name = "NotFoundError";
}
