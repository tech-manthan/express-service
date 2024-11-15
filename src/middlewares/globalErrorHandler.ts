import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import { logger } from "../utils";

function globalErrorHandler(
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  logger.error(err.message);

  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || "internal server error";
  const name = err.name || "server error";

  res.status(statusCode).json({
    errors: [
      {
        type: name,
        msg: message,
        path: "",
        location: "",
      },
    ],
  });
}

export default globalErrorHandler;
