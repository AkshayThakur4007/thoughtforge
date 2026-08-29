import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  createProjectController,
  getProjectsController,
  getProjectByIdController,
  updateProjectController,
  deleteProjectController,
} from "../controllers/project.controller";
import { validateSchema } from "../middleware/validate.middleware";
import { createProjectSchema, updateProjectSchema } from "../validations/project.validation";

const router = Router();

// All project routes require authentication
router.use(authenticate);

router.post("/", validateSchema(createProjectSchema), createProjectController);
router.get("/", getProjectsController);
router.get("/:id", getProjectByIdController);
router.put("/:id", validateSchema(updateProjectSchema), updateProjectController);
router.delete("/:id", deleteProjectController);

export default router;
