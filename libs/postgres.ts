import { Client } from 'pg'

const getConnection = async () => {
  const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    user: 'mike',
    password: 'ADMIN1998',
    database: 'boxers',
  });
  await client.connect();
  return client;
}

export { getConnection };
