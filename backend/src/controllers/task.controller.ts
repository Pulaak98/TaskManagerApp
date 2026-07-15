import type { Request, Response } from "express";
import { getAllTasksService } from "../services/task.service.js";
import { createTaskService } from "../services/task.service.js";
import { createTaskSchema } from "../validations/task.validation.js";
import { updateTaskService } from "../services/task.service.js";
import { updateTaskSchema } from "../validations/task.validation.js";
import { deleteTaskService } from "../services/task.service.js";
import { updateTaskStatusService } from "../services/task.service.js";
import { updateStatusSchema } from "../validations/task.validation.js";

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await getAllTasksService();

  res.json({
    success: true,
    data: tasks,
  });
};

export const createTask = async (
  req: Request,
  res: Response
) => {
const result = createTaskSchema.safeParse(req.body);

if (!result.success) {
  return res.status(400).json({
    success: false,
    errors: result.error.flatten().fieldErrors,
  });
}

const { title, description } = result.data;

  const task = await createTaskService(title, description);

  res.status(201).json({
    success: true,
    data: task,
  });
};


export const updateTask = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  const result = updateTaskSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.flatten().fieldErrors,
    });
  }

  const { title, description } = result.data;

  const task = await updateTaskService(id, title, description);

  res.json({
    success: true,
    data: task,
  });
};

export const deleteTask = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  await deleteTaskService(id);

  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
  });
};

export const updateTaskStatus = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  const result = updateStatusSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.flatten().fieldErrors,
    });
  }

  const { completed } = result.data;

  const task = await updateTaskStatusService(id, completed);

  res.json({
    success: true,
    data: task,
  });
};