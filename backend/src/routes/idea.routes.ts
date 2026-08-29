import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  createIdeaController,
  getIdeasController,
  getIdeaByIdController,
  updateIdeaController,
  deleteIdeaController,
} from "../controllers/idea.controller";
import { validateSchema } from "../middleware/validate.middleware";
import { createIdeaSchema, updateIdeaSchema } from "../validations/idea.validation";

const router = Router();

// All idea routes require authentication
router.use(authenticate);

router.post("/", validateSchema(createIdeaSchema), createIdeaController);
router.get("/", getIdeasController);
router.get("/:id", getIdeaByIdController);
router.put("/:id", validateSchema(updateIdeaSchema), updateIdeaController);
router.delete("/:id", deleteIdeaController);

export default router;
