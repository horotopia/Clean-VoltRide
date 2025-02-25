import { DefaultApplicationError } from ".";

export class RepositoryError extends DefaultApplicationError {
  name = "RepositoryError";
  statusCode = 500;
}
