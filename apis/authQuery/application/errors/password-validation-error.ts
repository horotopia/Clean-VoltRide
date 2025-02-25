import { DefaultApplicationError } from ".";

export class EmailValidationError extends DefaultApplicationError {
  statusCode = 400;
  name = "PasswordValidationError";
}
