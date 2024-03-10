import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB as string,
  process.env.MYSQL_USER as string,
  process.env.MQSQL_SENHA as string,
  {
    port: parseInt(process.env.MYSQL_PORT as string),
    dialect: "mysql"
  }
);

export default sequelize;