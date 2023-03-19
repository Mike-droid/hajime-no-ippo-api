require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  prod: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 8000,
  dbUser: process.env.DB_USER || 'mike',
  dbPassword: process.env.DB_PASSWORD || 'ADMIN1998',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'boxers',
  dbPort: process.env.DB_PORT || 5432,
  dbUrl: process.env.DATABASE_URL || 'postgres://mike:ADMIN1998@localhost:5432/boxers',
};

export { config };
