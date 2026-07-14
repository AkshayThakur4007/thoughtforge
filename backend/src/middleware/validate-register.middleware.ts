import type { Request, Response, NextFunction } from "express";
import { registerSchema } from "../validations/auth.validation";

export function validateRegisterRequest(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const result = registerSchema.safeParse(req.body);

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
