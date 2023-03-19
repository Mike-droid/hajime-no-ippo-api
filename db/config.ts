import { config } from "../config/config";

export = {
  development: {
    url: config.dbUrl,
    dialect: "postgres",
  },
  production: {
    url: config.dbUrl,
    dialect: "postgres",
  },
}

