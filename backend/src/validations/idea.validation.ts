import { z } from "zod";

export const createIdeaSchema = z.object({
  title: z.string().trim().min(1, "Idea title is required").max(100, "Idea title must be at most 100 characters"),
  content: z.string().trim().min(1, "Idea content is required").max(5000, "Content is too long"),
  projectId: z.string().uuid("Invalid Project ID").optional(),
});

export const updateIdeaSchema = z.object({
  title: z.string().trim().min(1, "Idea title cannot be empty").max(100, "Idea title must be at most 100 characters").optional(),
  content: z.string().trim().min(1, "Idea content cannot be empty").max(5000, "Content is too long").optional(),
  status: z.string().trim().min(1, "Status cannot be empty").optional(),
  projectId: z.string().uuid("Invalid Project ID").optional().nullable(),
});
