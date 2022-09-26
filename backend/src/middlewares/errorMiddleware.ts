import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";

export const errorMiddleware = (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = error.statusCode ? error.message : "Internal Server Error";
  const statusCode = error.statusCode ? error.statusCode : 500;

  return res.status(statusCode).json({ message });
};
