import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().trim().min(1, "Project name is required").max(100, "Project name must be at most 100 characters"),
  description: z.string().trim().max(500, "Description is too long").optional(),
});

export const updateProjectSchema = z.object({
  name: z.string().trim().min(1, "Project name cannot be empty").max(100, "Project name must be at most 100 characters").optional(),
  description: z.string().trim().max(500, "Description is too long").optional(),
});
