import express, { Express, Request, Response } from "express";
import proxy from "express-http-proxy";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Node Express! Gateway");
});

const auth = proxy("http://authcommand:5000");
const query = proxy("http://authquery:5000");

app.use("/auth", auth);

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
