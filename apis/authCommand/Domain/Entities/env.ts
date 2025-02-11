
export default class Env {
  public static readonly JWT_SECRET: string = process.env
    .JWT_SECRET as string;
  public static readonly JWT_EXPIRATION: string = process.env
    .JWT_EXPIRATION as string;
  public static readonly JWT_REFRESH_SECRET: string = process.env
    .JWT_REFRESH_SECRET as string;
  public static readonly JWT_REFRESH_EXPIRATION: string = process.env
    .JWT_REFRESH_EXPIRATION as string;
  public static readonly PORT: number = parseInt(
    process.env.PORT as string
  );
  public static readonly NODE_ENV: string = process.env.NODE_ENV as string;
  public static readonly MONGO_URI: string = process.env.MONGO_URI as string;
  public static readonly REDIS_URI: string = process.env.REDIS_URI as string;
  public static readonly REDIS_PORT: number = parseInt(
    process.env.REDIS_PORT as string
  );
  public static readonly REDIS_PASSWORD: string = process.env
    .REDIS_PASSWORD as string;
  public static readonly REDIS_DB: number = parseInt(
    process.env.REDIS_DB as string
  );
  public static readonly REDIS_EXPIRATION: number = parseInt(
    process.env.REDIS_EXPIRATION as string
  );
  public static readonly REDIS_PREFIX: string = process.env
    .REDIS_PREFIX as string;
  public static readonly EMAIL: string = process.env.EMAIL as string;
  public static readonly EMAIL_PASSWORD: string = process.env
    .EMAIL_PASSWORD as string;
  public static readonly EMAIL_SERVICE: string = process.env
    .EMAIL_SERVICE as string;
  public static readonly EMAIL_PORT: number = parseInt(
    process.env.EMAIL_PORT as string
  );
  public static readonly EMAIL_SECURE: boolean = process.env
    .EMAIL_SECURE as unknown as boolean;
  public static readonly EMAIL_HOST: string = process.env
    .EMAIL_HOST as string;
  public static readonly EMAIL_FROM: string = process.env
    .EMAIL_FROM as string;
  public static readonly EMAIL_SUBJECT: string = process.env
    .EMAIL_SUBJECT as string;
  public static readonly EMAIL_TEXT: string = process.env
    .EMAIL_TEXT as string;
  public static readonly EMAIL_HTML: string = process.env
    .EMAIL_HTML as string;
  public static readonly EMAIL_RESET_SUBJECT: string = process.env
    .EMAIL_RESET_SUBJECT as string;
  public static readonly EMAIL_RESET_TEXT: string = process.env
    .EMAIL_RESET_TEXT as string;
  public static readonly EMAIL_RESET_HTML: string = process.env
    .EMAIL_RESET_HTML as string;
  public static readonly EMAIL_CONFIRM_SUBJECT: string = process.env
    .EMAIL_CONFIRM_SUBJECT as string;
  public static readonly EMAIL_CONFIRM_TEXT: string = process.env 
    .EMAIL_CONFIRM_TEXT as string;
  public static readonly EMAIL_CONFIRM_HTML: string = process.env
    .EMAIL_CONFIRM_HTML as string;
  public static readonly EMAIL_CONFIRM_URL: string = process.env
    .EMAIL_CONFIRM_URL as string;
  public static readonly EMAIL_RESET_URL: string = process.env
    .EMAIL_RESET_URL as string;
  public static readonly EMAIL_CONFIRM_EXPIRATION: number = parseInt(
    process.env.EMAIL_CONFIRM_EXPIRATION as string
  );
  public static readonly EMAIL_RESET_EXPIRATION: number = parseInt(
    process.env.EMAIL_RESET_EXPIRATION as string
  );
  public static readonly EMAIL_CONFIRM_SECRET: string = process.env
    .EMAIL_CONFIRM_SECRET as string;
  public static readonly EMAIL_RESET_SECRET: string = process.env
    .EMAIL_RESET_SECRET as string;
  public static readonly EMAIL_CONFIRM_PREFIX: string = process.env
    .EMAIL_CONFIRM_PREFIX as string;
  public static readonly EMAIL_RESET_PREFIX: string = process.env
  