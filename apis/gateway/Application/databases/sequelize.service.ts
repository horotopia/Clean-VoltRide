import { config } from "dotenv";
import { Sequelize } from "sequelize";
import { UserService } from "./user.service";

config();
console.log("uri", process.env.POSTGRES_URI);

export class SequelizeService {
  private static instance?: SequelizeService;

  readonly sequelize: Sequelize;
  readonly userService: UserService;

  private constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
    this.userService = new UserService(this);
  }

  public static async get(): Promise<SequelizeService> {
    if (this.instance !== undefined) {
      return this.instance;
    }
    const connection = await this.openConnection();
    this.instance = new SequelizeService(connection);
    return this.instance;
  }

  private static async openConnection(): Promise<Sequelize> {
    const sequelize = new Sequelize(process.env.POSTGRES_URI as string, {
      dialect: "postgres",
      logging: false, // Désactiver les logs SQL
    });

    try {
      await sequelize.authenticate();
      console.log("✅ Connection à PostgreSQL réussie !");
    } catch (error) {
      console.error("❌ Impossible de se connecter à PostgreSQL :", error);
    }

    return sequelize;
  }
}
