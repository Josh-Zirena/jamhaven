# JamHaven Backend

This is the backend service for JamHaven, a white-label music streaming platform. It provides the core API functionality for managing users, tracks, playlists, and more.

## Tech Stack

- Fastify.js - High-performance web framework
- Knex.js - SQL query builder
- SQLite3 - Database (with Postgres support planned)
- JWT - Authentication
- Winston - Logging

## Prerequisites

- Node.js 18+
- npm or yarn

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment file:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration.

3. Create required directories:
   ```bash
   mkdir -p data/uploads
   ```

4. Run database migrations:
   ```bash
   npm run migrate
   ```

## Development

Start the development server:
```bash
npm run dev
```

The server will be available at `http://localhost:3000`.

## API Documentation

Once the server is running, visit `http://localhost:3000/documentation` for the Swagger UI documentation.

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with hot reload
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run migrate` - Run database migrations
- `npm run migrate:rollback` - Rollback database migrations
- `npm run seed` - Run database seeds

## Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration
│   ├── db/            # Database migrations and seeds
│   ├── routes/        # API routes
│   ├── models/        # Data models
│   ├── services/      # Business logic
│   ├── utils/         # Utility functions
│   └── server.js      # Main application file
├── data/              # Data directory (uploads, database)
├── knexfile.js        # Knex configuration
└── package.json
```

## Database Schema

The database schema includes the following main tables:
- tenants
- users
- artists
- albums
- tracks
- playlists
- playlist_tracks
- analytics_events

See the migrations for detailed schema information.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

Proprietary - All rights reserved 