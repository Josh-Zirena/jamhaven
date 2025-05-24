import { config } from './src/config/index.js';

export default {
  development: {
    client: config.db.client,
    connection: config.db.connection,
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  },
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  },
  production: {
    client: config.db.client,
    connection: config.db.connection,
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  }
}; 