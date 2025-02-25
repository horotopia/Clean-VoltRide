import proxy from "express-http-proxy";
import express, { Express, Request, Response, NextFunction } from "express";
import configureCORS from "./Infrastructure/libs/cors";
import configureHelmet from "./Infrastructure/libs/helmet";
import swaggerSpec from "./Infrastructure/docs/swagger";
import swaggerUi from "swagger-ui-express";
import { config } from "dotenv";
import { Logger } from "./Infrastructure/libs/logger";
import errorHandler from "./Interface/middlewares/errorHandler";

config();
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configureCORS(app);
configureHelmet(app);
const logger = Logger.get();

app.use((req: Request, res: Response, next: NextFunction) => {
  if (process.env.MODE_ENV === "development") {
    logger.http(
      `${req.method} ${req.url} - ${req.ip} - ${req.headers["user-agent"]}`
    );
  }
  next();
});

const authCommand = proxy("http://localhost:8081");
const authQuery = proxy("http://localhost:8082");
// const maintenanceCommand = proxy("http://localhost:8083");
// const maintenanceQuery = proxy("http://localhost:8084");
// const reservationCommand = proxy("http://localhost:8085");
// const reservationQuery = proxy("http://localhost:8086");
// const stockCommand = proxy("http://localhost:8087");
// const stockQuery = proxy("http://localhost:8088");

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler());
  
app.use("/api/auth", (req: Request, res: Response, next: NextFunction) => {
  req.method === "GET" ? authQuery(req, res, next) : authCommand(req, res, next);
});

// app.use("/api/maintenance", (req: Request, res: Response, next: NextFunction) => {
//   req.method === "GET" ? maintenanceQuery(req, res, next) : maintenanceCommand(req, res, next);
// });

// app.use("/api/reservation", (req: Request, res: Response, next: NextFunction) => {
//   req.method === "GET" ? reservationQuery(req, res, next) : reservationCommand(req, res, next);
// });

// app.use("/api/stock", (req: Request, res: Response, next: NextFunction) => {
//   req.method === "GET" ? stockQuery(req, res, next) : stockCommand(req, res, next);
// });

const host = process.env.API_HOST || "localhost";
const port = process.env.API_PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
  console.log(`Server is running on http://${host}:${port}/doc`);
});