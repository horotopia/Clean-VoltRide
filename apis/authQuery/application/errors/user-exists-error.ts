import { DefaultApplicationError } from ".";

export class UserExistsError extends DefaultApplicationError {
  statusCode = 409;
  name = "UserExistsError";
}
