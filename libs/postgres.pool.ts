import { Pool } from "pg";

import { config } from "../config/config";

let URI: string | undefined = '';

if (process.env.NODE_ENV === 'production') {
  URI = config.dbUrl;
} else {
  const USER = encodeURIComponent(config.dbUser as string);
  const PASSWORD = encodeURIComponent(config.dbPassword as string);
  URI = `postgress://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
}

const pool = new Pool({ connectionString: URI });

export { pool };
