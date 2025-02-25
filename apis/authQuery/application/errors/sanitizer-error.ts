import { DefaultApplicationError } from ".";

export class SanitizerError extends DefaultApplicationError {
  name = "SanitizerError";
  statusCode = 400;
}
