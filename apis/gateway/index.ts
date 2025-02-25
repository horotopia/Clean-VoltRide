import express, { Express, Request, Response } from "express";
import proxy from "express-http-proxy";
import rateLimit from "express-rate-limit";

const app: Express = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: 'Too many requests, please try again later.',
});

app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Node Express! Gateway");
});

const authProxy = proxy('http://authcommand:5000', {
    preserveHostHdr: true
});

const queryProxy = proxy('http://authquery:5000', {
    preserveHostHdr: true
});

app.use('/auth', authProxy);
app.use('/query', queryProxy);

const server = app.listen(8080, () => {
    console.log("Gateway is Listening to Port 8080");
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info("Server closed");
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error: unknown) => {
    console.error(error);
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
