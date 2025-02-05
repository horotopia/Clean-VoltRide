import winston from "winston";
import "winston-daily-rotate-file";
import { config } from "dotenv";

config();
export class Logger {
  private static instance: Logger;
  private logger: winston.Logger;

  private readonly level: string = process.env.NODE_ENV === "development" ? "debug" : "info";
  private readonly levels = { error: 0, warn: 1, info: 2, http: 3, debug: 5 };
  private readonly colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white",
  };
  private readonly format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.colorize({ all: true }),
    winston.format.errors({ stack: true }),
    winston.format.printf((info ) => {
      const stack = info.stack ? `\nStack trace: ${info.stack}` : "";
      return `${info.level}: ${info.message}, timestamp : ${info.timestamp}${stack}`;
    })
  );


  private constructor() {
    winston.addColors(this.colors);

    this.logger = winston.createLogger({
      level: this.level,
      levels: this.levels,
      format: this.format,
      transports: this.createTransports(),
      exceptionHandlers: this.createExceptionHandlers(),
    });
    this.handleUnhandledRejections();
  }

  private createTransports(): winston.transport[] {
    return [
      new winston.transports.Console(),
      this.createDailyRotateFile("api-combined"),
      this.createDailyRotateFile("api-error", "error"),
      this.createDailyRotateFile("api-info", "info"),
      this.createDailyRotateFile("api-http", "http"),
    ];
  }

  private createExceptionHandlers(): winston.transport[] {
    return [
      new winston.transports.Console(),
      this.createDailyRotateFile("api-exceptions"),
    ];
  }

  private createDailyRotateFile(
    filename: string,
    level?: string
  ) {
    return new winston.transports.DailyRotateFile({
      filename: `logs/${filename}-%DATE%.log`,
      level,
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxFiles: "14d",
    });
  }

  private handleUnhandledRejections(): void {
    process.on("unhandledRejection", (reason, promise) => {
      this.logger.error(`Unhandled Rejection at: ${promise} reason: ${reason}`);
    });
  }

  public static get(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public error(message: Error): void {
    this.logger.error(message);
  }

  public warn(message: string): void {
    this.logger.warn(message);
  }

  public info(message: string): void {
    this.logger.info(message);
  }

  public http(message: string): void {
    this.logger.log("http", message);
  }

  public debug(message: string): void {
    this.logger.debug(message);
  }

  public getLogger(): winston.Logger {
    return this.logger;
  }
}
