import knex from 'knex';
import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

const db = knex({
  client: config.db.client,
  connection: config.db.connection,
  useNullAsDefault: true
});

// Test the connection
db.raw('SELECT 1')
  .then(() => {
    logger.info('Database connection successful');
  })
  .catch((err) => {
    logger.error('Database connection failed:', err);
    process.exit(1);
  });

export default db; 