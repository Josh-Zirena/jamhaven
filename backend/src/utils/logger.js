import winston from 'winston';
import { config } from '../config/index.js';

const { format, transports } = winston;

const logger = winston.createLogger({
  level: config.logLevel,
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.json()
  ),
  defaultMeta: { service: 'jamhaven-backend' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })
  ]
});

// If we're not in production, log to the console with a simpler format
if (config.nodeEnv !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
}

export { logger }; 