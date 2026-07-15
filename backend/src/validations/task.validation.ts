import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title is too long"),

  description: z.string().optional(),
});

export const updateStatusSchema = z.object({
  completed: z.boolean(),
});

export const updateTaskSchema = createTaskSchema;