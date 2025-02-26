import express, { Express, Request, Response, NextFunction } from "express";
import configureCORS from "./config/cors";
import configureHelmet from "./config/helmet";
import swaggerSpec from "./docs/swagger";
import swaggerUi from "swagger-ui-express";
import { config } from "dotenv";
import { Logger } from "./config/logger";
import errorHandler from "./middlewares/errorHandler";
import authRoutes from "./routes/auth.routes";

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
      `${req.method} ${req.url} - ${req.ip} - ${req.headers["user-agent"]}`,
    );
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/auth", authRoutes);

app.use(errorHandler());

const host = process.env.API_HOST || "localhost";
const port = process.env.API_PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
  console.log(`Server is running on http://${host}:${port}/doc`);
});
