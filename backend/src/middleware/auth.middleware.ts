import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/app-error";

// Extend the Express Request type to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
      };
    }
  }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies.token;

    if (!token) {
      throw new AppError("Authentication required", 401);
    }

    const secret = process.env.JWT_SECRET || 'super_secret_development_key_do_not_use_in_prod';
    
    // Verify the token
    const decoded = jwt.verify(token, secret) as { userId: string };

    // Inject the user payload into the request object
    req.user = decoded;

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new AppError("Invalid or expired token", 401));
    } else {
      next(error);
    }
  }
}
