import { Sequelize } from "sequelize";

const db = new Sequelize("my_db", "admin", "qdvj4CmcpkSVhR6zMc6V", {
  host: "database-1.cg0ypt1vtzc4.ap-southeast-2.rds.amazonaws.com",
  dialect: "mysql",
  port: "3306",
});

export default db;
