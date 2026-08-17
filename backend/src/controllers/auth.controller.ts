import type { Request, Response, NextFunction } from "express";
import { registerUser, loginUser } from "../services/auth.service";
import { AppError } from "../utils/app-error";
import { generateToken } from "../utils/jwt";

// Helper function to set the secure cookie
const setTokenCookie = (res: Response, token: string) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

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
    
    const token = generateToken(user.id);
    setTokenCookie(res, token);

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

export async function loginController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email, password } = req.body;
    const user = await loginUser({ email, password });
    
    const token = generateToken(user.id);
    setTokenCookie(res, token);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getMeController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      throw new AppError("Not authenticated", 401);
    }

    return res.status(200).json({
      success: true,
      data: {
        userId,
      },
    });
  } catch (error) {
    next(error);
  }
}
