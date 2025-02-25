import winston from "winston";
import "winston-daily-rotate-file";
export declare class Logger {
    private static instance;
    private logger;
    private readonly level;
    private readonly levels;
    private readonly colors;
    private readonly format;
    private constructor();
    private createTransports;
    private createExceptionHandlers;
    private createDailyRotateFile;
    private handleUnhandledRejections;
    static get(): Logger;
    error(message: Error): void;
    warn(message: string): void;
    info(message: string): void;
    http(message: string): void;
    debug(message: string): void;
    getLogger(): winston.Logger;
}
