import type { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import AppError from "../utils/AppError.js";
import { ZodError } from "zod";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Prisma: Record not found
  if (
    err instanceof Prisma.PrismaClientKnownRequestError &&
    err.code === "P2025"
  ) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  if (err instanceof ZodError) {
  return res.status(400).json({
    success: false,
    errors: err.flatten().fieldErrors,
  });
}

  // Custom AppError
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Unknown Error
  console.error(err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorHandler;