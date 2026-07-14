import { Router } from "express";
import { registerController } from "../controllers/auth.controller";
import { validateRegisterRequest } from "../middleware/validate-register.middleware";

const authRouter = Router();

authRouter.post("/register", validateRegisterRequest, registerController);

export default authRouter;
