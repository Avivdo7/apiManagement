import { DataSource } from "typeorm";
import { Organization } from "./models/organization";
import { Endpoint } from "./models/endpoint";
import { User } from "./models/user";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "6759979",
  database: "org_management",
  entities: [Organization, Endpoint, User],
  synchronize: true,
  logging: false,
  migrations: [],
  subscribers: [],
});
