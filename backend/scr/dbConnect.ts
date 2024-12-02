import "reflect-metadata";
import { DataSource } from "typeorm";
import { Ticket } from "./Models /ticketModel";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "704463",
  database: "first_orm_project",
  synchronize: true,
  logging: true,
  entities: [Ticket],
});
