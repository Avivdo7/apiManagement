import { DataSource } from "typeorm";
import { Organization } from "./models/organization";
import { Endpoint } from "./models/endpoint";
import { User } from "./models/user";
import { config } from "dotenv";

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Organization, Endpoint, User],
  synchronize: true,
  logging: false,
  migrations: [],
  subscribers: [],
});
