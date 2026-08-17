import type { Request, Response, NextFunction } from "express";
import { loginSchema } from "../validations/auth.validation";

export function validateLoginRequest(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid request",
      errors: result.error.issues,
    });
  }

  req.body = result.data;
  next();
}
