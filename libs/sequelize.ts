import { Sequelize } from "sequelize";
import { config } from "../config/config";
import { setupModels } from "../db/models";

const sequelize: Sequelize = new Sequelize(config.dbUrl, {
  dialect: 'postgres',
  logging: () => console.log()
})

setupModels(sequelize);

export { sequelize as models };
