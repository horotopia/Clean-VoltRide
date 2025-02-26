import { config } from "dotenv";
import swaggerJsdoc from "swagger-jsdoc";

config();
interface SwaggerOptions {
  definition: {
    openapi: string;
    info: {
      title: string;
      version: string;
      description: string;
    };
    components: {
      securitySchemes: {
        bearerAuth: {
          type: string;
          scheme: string;
          bearerFormat: string;
        };
      };
    };
    security: { bearerAuth: string[] }[];
    servers: {
      url: string;
      description: string;
    }[];
  };
  apis: string[];
}

const hostname: string = process.env.API_HOST || "localhost";
const port: string | number = process.env.API_PORT || 5000;

const swaggerOptions: SwaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce API",
      version: "0.1.0",
      description: "E-commerce API documentation",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: `http://${hostname || "localhost"}:${port || 5000}`,
        description: "Development server",
      },
    ],
  },
  apis: [
    "apis/authCommand/infrastructure/orms/mongoose/*.ts",
    "apis/authCommand/interface/controllers/auth/*.ts",
  ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
if (!swaggerSpec) {
  throw new Error(
    "Erreur lors de la configuration de Swagger : swaggerSpec est undefined.",
  );
}

export default swaggerSpec;
