import winston from "winston";
import CONFIG from "../config";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  defaultMeta: { service: "service" },
  transports: [
    new winston.transports.Console({
      level: "info",
      silent: CONFIG.NODE_ENV == "test" || CONFIG.NODE_ENV === "prod",
    }),
    new winston.transports.File({
      filename: "error.log",
      dirname: "app-logs",
      level: "error",
      silent: CONFIG.NODE_ENV == "test",
    }),
    new winston.transports.File({
      filename: "combined.log",
      dirname: "app-logs",
      level: "info",
      silent: CONFIG.NODE_ENV == "test",
    }),
  ],
});

export default logger;
