import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_PASSWORD } = process.env;

const db = new Sequelize("proshop", "postgres", DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  // logging: false,
});

export default db;
