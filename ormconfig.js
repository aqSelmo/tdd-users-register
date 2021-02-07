const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  "type": process.env.DB_CONNECTION,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "synchronize": process.env.DB_SYNCHRONIZE,
  "logging": process.env.DB_LOGGING,
  "entities": [ process.env.DB_ENTITIES ],
  "migrations": [ process.env.DB_MIGRATIONS ],
  "cli": {
    "migrationsDir": "./src/database/migrations",
    "entitiesDir": "./src/database/entities",
  }
}
