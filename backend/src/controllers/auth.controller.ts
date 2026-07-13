import type { Request, Response, NextFunction } from "express";
import { registerUser } from "../services/auth.service";

export async function registerController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser({
      name,
      email,
      password,
    });
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
}
