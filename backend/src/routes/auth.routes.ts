import { Router } from "express";
import { registerController, loginController, getMeController, logoutController } from "../controllers/auth.controller";
import { validateRegisterRequest } from "../middleware/validate-register.middleware";
import { validateLoginRequest } from "../middleware/validate-login.middleware";
import { authenticate } from "../middleware/auth.middleware";

const authRouter = Router();

authRouter.post("/register", validateRegisterRequest, registerController);
authRouter.post("/login", validateLoginRequest, loginController);
authRouter.post("/logout", logoutController);
authRouter.get("/me", authenticate, getMeController);

export default authRouter;
