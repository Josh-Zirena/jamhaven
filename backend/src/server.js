import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import multipart from '@fastify/multipart';
import staticPlugin from '@fastify/static';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Fastify instance
const server = Fastify({
  logger: {
    level: config.logLevel,
    transport: {
      target: 'pino-pretty'
    }
  }
});

// Register plugins
async function registerPlugins() {
  // CORS
  await server.register(cors, {
    origin: config.corsOrigin,
    credentials: true
  });

  // JWT
  await server.register(jwt, {
    secret: config.jwtSecret,
    sign: {
      expiresIn: config.jwtExpiresIn
    }
  });

  // Multipart for file uploads
  await server.register(multipart, {
    limits: {
      fileSize: 50 * 1024 * 1024 // 50MB limit
    }
  });

  // Static file serving
  await server.register(staticPlugin, {
    root: join(__dirname, '../public'),
    prefix: '/public/'
  });

  // Swagger documentation
  await server.register(swagger, {
    swagger: {
      info: {
        title: 'JamHaven API',
        description: 'API documentation for JamHaven',
        version: '1.0.0'
      }
    }
  });

  await server.register(swaggerUi, {
    routePrefix: '/documentation'
  });
}

// Register routes
async function registerRoutes() {
  // Health check route
  server.get('/health', async () => {
    return { status: 'ok' };
  });

  // TODO: Register other route modules here
  // await server.register(import('./routes/auth.js'));
  // await server.register(import('./routes/users.js'));
  // etc...
}

// Start server
async function start() {
  try {
    await registerPlugins();
    await registerRoutes();
    
    await server.listen({ 
      port: config.port,
      host: config.host
    });
    
    logger.info(`Server listening on ${server.server.address().port}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

start(); 